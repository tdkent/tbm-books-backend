const client = require("../client");
const bcrpyt = require("bcrypt");
const saltRounds = 10;

const createUser = async ({ userEmail, password }) => {
  try {
    const hash = await bcrpyt.hash(password, saltRounds);
    const { rows } = await client.query(
      `
      insert into users("userEmail", password)
      values($1, $2)
      returning id, "userEmail";
    `,
      [userEmail, hash]
    );
    return rows[0];
  } catch (err) {
    console.error("An error occurred in createUser:", err);
  }
};

const checkUser = async (userEmail, password) => {
  try {
    const { rows } = await client.query(
      `
      select id, "userEmail", password
      from users
      where "userEmail" = $1;
    `,
      [userEmail]
    );
    const match = await bcrpyt.compare(password, rows[0].password);
    return match ? rows : false;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getAllUsers = async () => {
  try {
    const { rows } = await client.query(`
      select * from users;
    `);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getUserProfileById = async (userId) => {
  try {
    const { rows: user } = await client.query(
      `
      select id, "userEmail" from users
      where id = $1;
    `,
      [userId]
    );
    const { rows: usersOrders } = await client.query(
      `
      select id from users_orders
      where "userId" = $1;
    `,
      [userId]
    );
    let arr = [];
    for (const order of usersOrders) {
      const { rows: userOrder } = await client.query(
        `
      select id as "orderId", "isComplete", price from users_orders
      where id = $1;
    `,
        [order.id]
      );
      const { rows: orderDetails } = await client.query(
        `
    select orders_details."bookId", orders_details.quantity, books.title
    from orders_details
    join books
    on orders_details."bookId" = books.id
    where "orderId" = $1;
  `,
        [order.id]
      );
      const completeOrder = {
        ...userOrder[0],
        orderDetails,
      };
      arr.push(completeOrder);
    }
    const userProfile = {
      ...user[0],
      orders: arr,
    };
    console.log("user profile: ", userProfile);
    return userProfile;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getUserByEmail = async (userEmail) => {
  try {
    const { rows } = await client.query(
      `
      select * from users
      where "userEmail"=$1;
    `,
      [userEmail]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getUserById = async (userId) => {
  try {
    const { rows } = await client.query(
      `
      select id, "userEmail" from users
      where id = $1;
    `,
      [userId]
    );
    return rows[0];
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  checkUser,
  getUserProfileById,
  getUserById,
};
