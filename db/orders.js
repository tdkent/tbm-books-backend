const client = require("../client");

const createUserOrder = async ({ userId, isComplete, price }) => {
  try {
    const { rows } = await client.query(
      `
      insert into users_orders("userId", "isComplete", price)
      values ($1, $2, $3)
      returning *;
    `,
      [userId, isComplete, price]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createOrderDetails = async ({ orderId, bookId, quantity }) => {
  try {
    const { rows } = await client.query(
      `
      insert into orders_details("orderId", "bookId", quantity)
      values ($1, $2, $3)
      returning *;
    `,
      [orderId, bookId, quantity]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getAllUsersOrders = async () => {
  try {
    const { rows } = await client.query(`
      select * from users_orders;
    `);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const postAddToCart = async (userId, price, bookId) => {
  try {
    const { rows: check } = await client.query(
      `
      select id from users_orders
      where "userId" = $1
      and "isComplete" = false;
    `,
      [userId]
    );
    if (!check.length) {
      // start new order
      const { rows: newOrder } = await client.query(
        `
        insert into users_orders("userId", price)
        values ($1, $2)
        returning *;
      `,
        [userId, price]
      );
      const { rows: details } = await client.query(
        `
      insert into orders_details("orderId", "bookId")
      values ($1, $2)
      returning *;
    `,
        [newOrder[0].id, bookId]
      );
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createUserOrder,
  getAllUsersOrders,
  createOrderDetails,
  postAddToCart,
};
