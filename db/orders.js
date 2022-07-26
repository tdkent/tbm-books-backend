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

const completeOrder = async (orderId, userId) => {
  try {
    const { rows } = await client.query(`
      update users_orders
      set "isComplete" = true
      where id = $1
      and "userId" = $2
      returning id, "isComplete";
    `, [orderId, userId]);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createUserOrder,
  getAllUsersOrders,
  createOrderDetails,
  completeOrder,
};
