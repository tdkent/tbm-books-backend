const client = require("../client");
const bcrpyt = require("bcrypt");

const createUser = async ({
  userEmail,
  password,
  isAdmin = false,
  isGuest = false,
  state,
  city,
  street,
  zip,
}) => {
  try {
    const hash = await bcrpyt.hash(password, 10);
    const { rows } = await client.query(
      `
      insert into users("userEmail", password, "isAdmin", "isGuest", state, city, street, zip)
      values($1, $2, $3, $4, $5, $6, $7, $8)
      returning id, "userEmail", "isAdmin", "isActive", "isGuest", state, city, street, zip;
    `,
      [userEmail, hash, isAdmin, isGuest, state, city, street, zip]
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

const getUserByUserEmail = async (userEmail) => {
  try {
    const { rows } = await client.query(
      `
      select id, "userEmail", "isAdmin", "isGuest", "isActive" from users
      where "userEmail" = $1;
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
      select id, "userEmail", state, city, street, zip from users
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
      books."imageLinkM"
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
          books.inventory,
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

const createWishlist = async ({ userId, bookId }) => {
  try {
    const { rows } = await client.query(
      `
      insert into wishlist("userId", "bookId")
      values ($1, $2)
      returning *;
    `,
      [userId, bookId]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const postItemToWishlist = async (userId, bookId) => {
  try {
    const { rows: checkBook } = await client.query(
      `
    select "bookId", "userId" from wishlist
    where "bookId" = $1
    and "userId" = $2;
  `,
      [bookId, userId]
    );
    if (checkBook.length) {
      return [];
    } else {
      const { rows: wishlist } = await client.query(
        `
      insert into wishlist("userId", "bookId")
      values($1, $2)
      returning *;
    `,
        [userId, bookId]
      );
      return wishlist;
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const deleteBookFromWishlist = async (wishlistId) => {
  try {
    const { rows: deleted } = await client.query(
      `
      delete from wishlist
      where id = $1
      returning id;
    `,
      [wishlistId]
    );
    return deleted;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getUserWishlist = async (userId) => {
  try {
    const { rows } = await client.query(
      `
      select
        wishlist.id as "wishlistId",
        wishlist."bookId",
        books.title,
        books.author,
        books.price,
        books."imageLinkM",
        books.inventory  
      from wishlist
      join books on wishlist."bookId" = books.id
      where wishlist."userId" = $1;
    `,
      [userId]
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const editUserAddress = async ({ userId, ...fields }) => {
  const { state, city, street, zip } = fields;
  try {
    const { rows } = await client.query(
      `
        update users set
          state = coalesce ($1, state),
          city = coalesce ($2, city),
          street = coalesce ($3, street),
          zip = coalesce ($4, zip)
        where id = $5
        and($1 is distinct from state or
          $2 is distinct from city or
          $3 is distinct from street or
          $4 is distinct from zip)
        returning id, state, city, street, zip; 
      `,
      [state, city, street, zip, userId]
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const guestToLoginCart = async (userId, guestCart) => {
  try {
    const { rows: openOrder } = await client.query(
      `
    select * from users_orders
    where "userId" = $1 and "isComplete" = false;
    `,
      [userId]
    );
    if (openOrder.length) {
      let updatedOrderPrice = Number(openOrder[0].orderPrice);
      for (const book of guestCart) {
        updatedOrderPrice += Number(book.price) * Number(book.bookQuantity);
      }
      const { rows: updateUserOrder } = await client.query(
        `
        update users_orders set
          "orderPrice" = $1
        where id = $2
        returning *;
      `,
        [updatedOrderPrice, openOrder[0].id]
      );
      for (const book of guestCart) {
        const { rows: check } = await client.query(
          `
        select * from orders_details
        where "orderId" = $1 and "bookId" = $2;
      `,
          [openOrder[0].id, book.id]
        );
        if (check.length) {
          await client.query(
            `
            update orders_details set
              quantity = (quantity + $1)
            where "orderId" = $2 and "bookId" = $3;
          `,
            [Number(book.bookQuantity), openOrder[0].id, book.id]
          );
        } else {
          await client.query(
            `
            insert into orders_details("orderId", "bookId", "bookPrice", quantity)
            values($1, $2, $3, $4)
          `,
            [openOrder[0].id, book.id, book.price, book.bookQuantity]
          );
        }
      }
      return updateUserOrder;
    } else {
      let orderPrice = 0;
      for (const book of guestCart) {
        orderPrice += book.price * book.bookQuantity;
      }
      const { rows: newUserOrder } = await client.query(
        `
        insert into users_orders("userId", "isComplete", "orderPrice")
        values($1, $2, $3)
        returning *;
      `,
        [userId, (isComplete = false), orderPrice]
      );
      for (const book of guestCart) {
        await client.query(
          `
        insert into orders_details("orderId", "bookId", "bookPrice", quantity)
        values($1, $2, $3, $4)
        returning *;
      `,
          [newUserOrder[0].id, book.id, book.price, book.bookQuantity]
        );
      }
      return newUserOrder;
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createUser,
  getUserByUserEmail,
  checkUser,
  getUserProfileById,
  getUserCartById,
  getUserById,
  editUserAddress,
  guestToLoginCart,
  createWishlist,
  getUserWishlist,
  postItemToWishlist,
  deleteBookFromWishlist,
};
