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

// const getCompleteOrderById = async ({ orderId }) => {
//   try {
//     const { rows: userOrder } = await client.query(`
//       select * from users_orders
//       where id = $1;
//     `, [orderId]);
//     const { rows: orderDetails } = await client.query(`
//     select orders_details."bookId", orders_details.quantity, books.title
//     from orders_details
//     join books
//     on orders_details."bookId" = books.id
//     where "orderId" = $1;
//   `, [orderId]);
//     const order = {
//       ...userOrder[0],
//       details: orderDetails
//     }
//     return [ order ]
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// };

module.exports = {
  createUserOrder,
  getAllUsersOrders,
  createOrderDetails,
  // getCompleteOrderById,
};
