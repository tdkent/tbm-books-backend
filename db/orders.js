const client = require("../client");

const createUserOrder = async ({ userId, isComplete, orderPrice }) => {
  try {
    const { rows } = await client.query(
      `
      insert into users_orders("userId", "isComplete", "orderPrice")
      values ($1, $2, $3)
      returning *;
    `,
      [userId, isComplete, orderPrice]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createOrderDetails = async ({ orderId, bookId, bookPrice, quantity }) => {
  try {
    const { rows } = await client.query(
      `
      insert into orders_details("orderId", "bookId", "bookPrice", quantity)
      values ($1, $2, $3, $4)
      returning *;
    `,
      [orderId, bookId, bookPrice, quantity]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const userCompleteOrder = async (orderId) => {
  try {
    const { rows: close } = await client.query(
      `
      update users_orders
      set "isComplete" = true
      where id = $1
      returning id, "isComplete";
    `,
      [orderId]
    );
    const { rows: details } = await client.query(
      `
      select "bookId", quantity from orders_details
      where "orderId" = $1;
    `,
      [orderId]
    );
    let arr = [];
    for (const book of details) {
      const { rows: inv } = await client.query(
        `
        update books set
          inventory = (inventory - $1)
        where id = $2
        returning id, inventory;
      `,
        [book.quantity, book.bookId]
      );
      arr.push({
        bookId: book.bookId,
        quantity: book.quantity,
        inventory: inv[0].inventory,
      });
    }
    const data = {
      orderId,
      isComplete: close[0].isComplete,
      details: arr,
    };
    return data;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createUserOrder,
  createOrderDetails,
  userCompleteOrder,
};
