const client = require("../client");

const createAuthor = async ({ firstName, lastName }) => {
  try {
    const { rows } = await client.query(
      `
      insert into authors("firstName", "lastName")
      values ($1, $2)
      returning *;
    `,
      [firstName, lastName]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred in createAuthor: ", err);
  }
};

module.exports = {
  createAuthor,
}