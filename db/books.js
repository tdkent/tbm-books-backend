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
  isFeatured = false,
  genre,
  description,
  rating,
  globalRatings,
  price,
  inventory,
  isActive = true,
}) => {
  try {
    const { rows } = await client.query(
      `
      insert into books(isbn, title, author, year, publisher, "imageLinkS", "imageLinkM", "imageLinkL","isFeatured", genre, description, rating, "globalRatings", price, inventory, "isActive")
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
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
        isActive,
      ]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred in createBook: ", err);
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
      where genre = $1
      and "isActive" = true;
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
      where "isActive" = true
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
    where "isActive" = true
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
      where "isFeatured" = true
      and "isActive" = true;
    `);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createBook,
  getBookById,
  getAllBooksByGenre,
  getBooksCuratedRankings,
  getBooksCuratedRatings,
  getAllFeatured,
};
