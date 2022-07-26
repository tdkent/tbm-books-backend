const client = require("../client");

const postAddItemToCart = async (userId, bookPrice, bookId, quantity) => {
  const { rows: openOrder } = await client.query(
    `
    select id, "orderPrice" from users_orders
    where "userId" = $1
    and "isComplete" = false;
  `,
    [userId]
  );
  if (!openOrder.length) {
    const newOrderPrice = Number(bookPrice) * Number(quantity);
    const { rows: newOrder } = await client.query(
      `
      insert into users_orders("userId", "orderPrice")
      values($1, $2)
      returning *;
    `,
      [userId, newOrderPrice]
    );
    const { rows: newOrderDetails } = await client.query(
      `
      insert into orders_details("orderId", "bookId", "bookPrice", quantity)
      values($1, $2, $3, $4)
      returning "bookId", "bookPrice", quantity;
    `,
      [newOrder[0].id, bookId, bookPrice, quantity]
    );
    const orderData = {
      orderId: newOrder[0].id,
      userId: newOrder[0].userId,
      isComplete: newOrder[0].isComplete,
      orderPrice: newOrder[0].orderPrice,
      bookId: newOrderDetails[0].bookId,
      bookPrice: newOrderDetails[0].bookPrice,
      quantity: newOrderDetails[0].quantity,
    };
    return [orderData];
  } else {
    const updateOrderPrice =
      Number(openOrder[0].orderPrice) + Number(bookPrice) * Number(quantity);
    const { rows: updateOrder } = await client.query(
      `
      update users_orders
      set "orderPrice" = $1
      where id = $2
      returning "orderPrice";
    `,
      [updateOrderPrice, openOrder[0].id]
    );
    const { rows: checkBook } = await client.query(
      `
      select "bookId", quantity from orders_details
      where "orderId" = $1
      and "bookId" = $2;
    `,
      [openOrder[0].id, bookId]
    );
    if (!checkBook.length) {
      const { rows: updateOrderDetails } = await client.query(
        `
        insert into orders_details("orderId", "bookId", "bookPrice", quantity)
        values($1, $2, $3, $4)
        returning "bookId", "bookPrice", quantity;
      `,
        [openOrder[0].id, bookId, bookPrice, quantity]
      );
      const orderData = {
        orderId: openOrder[0].id,
        userId: openOrder[0].userId,
        isComplete: openOrder[0].isComplete,
        orderPrice: updateOrder[0].orderPrice,
        bookId: updateOrderDetails[0].bookId,
        bookPrice: updateOrderDetails[0].bookPrice,
        quantity: updateOrderDetails[0].quantity,
      };
      return [orderData];
    } else {
      const newQuantity = checkBook[0].quantity + Number(quantity);
      const { rows: updateBookQuantity } = await client.query(
        `
        update orders_details
        set quantity = $1
        where "orderId" = $2
        and "bookId" = $3
        returning "bookId", "bookPrice", quantity;
      `,
        [newQuantity, openOrder[0].id, bookId]
      );
      const orderData = {
        orderId: openOrder[0].id,
        userId: openOrder[0].userId,
        isComplete: openOrder[0].isComplete,
        orderPrice: updateOrder[0].orderPrice,
        bookId: updateBookQuantity[0].bookId,
        bookPrice: updateBookQuantity[0].bookPrice,
        quantity: updateBookQuantity[0].quantity,
      };
      return [orderData];
    }
  }
};

const deleteItemFromCart = async (
  orderId,
  orderPrice,
  bookId,
  bookPrice,
  quantity
) => {
  try {
    const { rows: deleted } = await client.query(
      `
      delete from orders_details
      where "orderId" = $1
      and "bookId" = $2
      returning "bookId";
    `,
      [orderId, bookId]
    );
    const { rows: order } = await client.query(
      `
      select "orderPrice" from users_orders
      where id = $1;
    `,
      [orderId]
    );
    const updatedOrderPrice =
      Number(order[0].orderPrice) - Number(bookPrice) * Number(quantity);
    if (updatedOrderPrice > 0.01) {
      await client.query(
        `
        update users_orders
        set "orderPrice" = $1
        where id = $2;
      `,
        [updatedOrderPrice, orderId]
      );
    } else {
      await client.query(
        `
        delete from users_orders
        where id = $1;
      `,
        [orderId]
      );
    }
    return deleted;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const editCartQuantity = async (
  orderId,
  orderPrice,
  bookId,
  bookPrice,
  oldQuantity,
  newQuantity
) => {
  try {
    const { rows: updated } = await client.query(
      `
      update orders_details
      set quantity = $1
      where "orderId" = $2
      and "bookId" = $3
      returning "orderId";
    `,
      [newQuantity, orderId, bookId]
    );
    const updatedOrderPrice = Number(orderPrice) + (Number(newQuantity) - Number(oldQuantity)) * bookPrice;
    await client.query(
      `
      update users_orders
      set "orderPrice" = $1
      where id = $2;
    `,
      [updatedOrderPrice, orderId]
    );
    return updated;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  postAddItemToCart,
  deleteItemFromCart,
  editCartQuantity,
};
