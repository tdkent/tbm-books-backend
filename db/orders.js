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

// const postAddToCart = async (userId, price, bookId) => {
//   try {
//     // check if user has existing open order
//     const { rows: openOrder } = await client.query(
//       `
//       select id from users_orders
//       where "userId" = $1
//       and "isComplete" = false;
//     `,
//       [userId]
//     );
//     // if no existing open order...
//     if (!openOrder.length) {
//       // start new order
//       const { rows: newOrder } = await client.query(
//         `
//         insert into users_orders("userId", price)
//         values ($1, $2)
//         returning *;
//       `,
//         [userId, price]
//       );
//       const { rows: details } = await client.query(
//         `
//       insert into orders_details("orderId", "bookId")
//       values ($1, $2)
//       returning *;
//     `,
//         [newOrder[0].id, bookId]
//       );
//       // if existing open order...
//     } else {
//       // add updated price to the existing order "openOrder" (nothing else needs to be updated here)
//       // extract price from open order (openOrder[0].price)
//       // const newPrice = openOrder[0].price + price (may need to wrap in Number())
//       // insert new row into orders_details (refactor so this is not part of conditional?)
//       const { rows: updatedOrder } = await client.query(`
        
//       `)
//     }
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// };

module.exports = {
  createUserOrder,
  getAllUsersOrders,
  createOrderDetails,
  //postAddToCart,
};
