const client = require("../client");

const getResultsCount = async (searchString) => {
  try {
    const { rows } = await client.query(`
      select count(*) from books
      where title like '%${searchString}%'
      or author like '%${searchString}%'
      or publisher like '%${searchString}%';
    `);
    if (rows.length) return rows[0].count;
    else return [];
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const searchBasicPaginated = async (searchString, currentPage) => {
  try {
    const offset = (currentPage - 1) * 20;
    const { rows } = await client.query(
      `
      select * from books
      where title like '%${searchString}%'
      or author like '%${searchString}%'
      or publisher like '%${searchString}%'
      limit 20 offset $1;
    `,
      [offset]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  searchBasicPaginated,
  getResultsCount,
};
