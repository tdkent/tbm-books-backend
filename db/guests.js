const client = require("../client");
const bcrpyt = require("bcrypt");

const guestCheckout = async (guestEmail, guestCart) => {
  try {
    const { rows: check } = await client.query(
      `
      select id, "isGuest" from users
      where "userEmail" = $1;
    `,
      [guestEmail]
    );
    if (check.length && !check[0].isGuest) {
      return "login";
    }
    let userId;
    if (check.length) {
      userId = check[0].id;
    }
    if (!check.length) {
      const hash = await bcrpyt.hash(process.env.GUEST_PASSWORD, 10);
      const { rows: add } = await client.query(
        `
        insert into users("userEmail", password, "isGuest")
        values($1, $2, $3)
        returning *;
      `,
        [guestEmail, hash, (isGuest = true)]
      );
      userId = add[0].id;
    }
    let orderPrice = 0;
    for (const book of guestCart) {
      orderPrice += book.price * book.bookQuantity;
    }
    const { rows: userOrder } = await client.query(
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
        [userOrder[0].id, book.id, book.price, book.bookQuantity]
      );
    }
    return { status: "checkout", orderId: userOrder[0].id, userId, orderPrice };
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const guestCompleteOrder = async (orderId) => {
  try {
    const { rows } = await client.query(
      `
      update users_orders
      set "isComplete" = true
      where id = $1
      returning id, "isComplete";
     `,
      [orderId]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  guestCheckout,
  guestCompleteOrder,
};
