const client = require("../client");

const createReview = async ({ userId, bookId, content }) => {
  try {
    const { rows } = await client.query(
      `
      insert into reviews("userId", "bookId", content)
      values($1, $2, $3)
      returning *;
    `,
      [userId, bookId, content]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createReview,
};
