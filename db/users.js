const client = require("../client");
const bcrpyt = require("bcrypt");
const saltRounds = 10;

const createUser = async ({ userEmail, password, isAdmin = false, isGuest = false }) => {
  try {
    const hash = await bcrpyt.hash(password, saltRounds);
    const { rows } = await client.query(
      `
      insert into users("userEmail", password, "isAdmin", "isGuest")
      values($1, $2, $3, $4)
      returning id, "userEmail", "isAdmin", "isActive", "isGuest";
    `,
      [userEmail, hash, isAdmin, isGuest]
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
      select id, "userEmail", password, "isAdmin"
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
      select id, "userEmail", "isAdmin" from users
      where id = $1;
    `,
      [userId]
    );
    return rows[0];
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
      select id as "orderId", "isComplete", "orderPrice" from users_orders
      where id = $1;
    `,
        [order.id]
      );
      const { rows: orderDetails } = await client.query(
        `
    select
      orders_details."bookId",
      orders_details."bookPrice",
      orders_details.quantity,
      books.title,
      books."imageLinkS"
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

const getUserCartById = async (userId) => {
  try {
    const { rows: order } = await client.query(
      `
      select id as "orderId", "orderPrice" from users_orders
      where "userId" = $1
      and "isComplete" = false;
    `,
      [userId]
    );
    if (order.length) {
      const { rows: details } = await client.query(
        `
        select 
          orders_details."bookId",
          orders_details."bookPrice",
          orders_details.quantity,
          books.title,
          books."imageLinkS"
        from orders_details
        join books
        on orders_details."bookId" = books.id
        where "orderId" = $1;
      `,
        [order[0].orderId]
      );
      let arr = [];
      for (const item of details) {
        arr.push(item);
      }
      const usersCart = {
        ...order[0],
        orderDetails: arr,
      };
      return usersCart;
    } else return order;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  checkUser,
  getUserProfileById,
  getUserCartById,
  getUserById,
};
