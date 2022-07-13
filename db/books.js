const client = require('../client');

const createBook = async ({ title, year }) => {
  try {
    const {rows} = await client.query(`
      insert into books(title, year)
      values ($1, $2)
      returning *;
    `, [title, year]);
    return rows;
  }
  catch(err) {
    console.error("An error occurred in createBook: ", err);
  }
}

module.exports = {
  createBook,
}