const client = require("../client");

const createBook = async ({
  isbn,
  title,
  author,
  year,
  publisher,
  imageLinkS,
  imageLinkM,
  imageLinkL,
  isFeatured,
  genre,
  description,
  rating,
  globalRatings,
  price,
  inventory,
}) => {
  try {
    const { rows } = await client.query(
      `
      insert into books(isbn, title, author, year, publisher, "imageLinkS", "imageLinkM", "imageLinkL","isFeatured", genre, description, rating, "globalRatings", price, inventory)
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      returning *;
    `,
      [
        isbn,
        title,
        author,
        year,
        publisher,
        imageLinkS,
        imageLinkM,
        imageLinkL,
        isFeatured,
        genre,
        description,
        rating,
        globalRatings,
        price,
        inventory,
      ]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred in createBook: ", err);
  }
};

const getAllBooks = async () => {
  try {
    const { rows } = await client.query(`
      select * from books;
      
    `);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getBookById = async (id) => {
  try {
    const { rows } = await client.query(
      `
      select * from books
      where id = $1;
    `,
      [id]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getAllBooksByGenre = async (genre) => {
  try {
    const { rows } = await client.query(
      `
      select * from books
      where genre = $1;
    `,
      [genre]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getBooksCuratedRankings = async () => {
  try {
    const { rows } = await client.query(`
      select * from books
      order by "globalRatings" desc
      limit 10;
    `);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getBooksCuratedRatings = async () => {
  try {
    const { rows } = await client.query(`
    select * from books
    order by rating desc
    limit 10;
  `);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getAllFeatured = async () => {
  try {
    const { rows } = await client.query(`
      select * from books
      where "isFeatured" = true;
    `);
    return id;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  getAllBooksByGenre,
  getBooksCuratedRankings,
  getBooksCuratedRatings,
  getAllFeatured,
};
