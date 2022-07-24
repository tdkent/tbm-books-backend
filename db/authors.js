const client = require("../client");

const getAuthorBooks = async (author) => {
  try {
    const { rows } = await client.query(`
      select * from books
      where author = $1;
    `,[author]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  getAuthorBooks
}