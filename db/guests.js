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
      return "LoginRequired";
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
    return userOrder;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  guestCheckout,
};
