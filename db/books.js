const res = require("express/lib/response");
const client = require("../client");

const createBook = async ({
  isbn,
  title,
  author,
  year,
  publisher,
  imageLinkS,
  imageLinkM,
  imageLinkL
}) => {
  try {
    const { rows } = await client.query(
      `
      insert into books(isbn, title, author, year, publisher, imageLinkS, imageLinkM, imageLinkL)
      values ($1, $2, $3, $4, $5, $6, $7, $8)
      returning *;
    `,
      [isbn, title, author, year, publisher, imageLinkS, imageLinkM, imageLinkL]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred in createBook: ", err);
  }
};

const getAllBooksNoReviews = async () => {
  try {
    const { rows } = await client.query(`
      select * from books;
    `);
    return rows;
  } catch (err) {
    console.error("An error occurred in createBook: ", err);
  }
};

const getAllBooksWithReviews = async () => {
  try {
    const { rows: books } = await client.query(`
      select 
        books.*,
        authors."firstName",
        authors."lastName" 
      from books
      join authors
      on books."authorId" = authors.id
    `);
    let booksArr = [];
    for (const book of books) {
      const { rows: reviews } = await client.query(
        `
        select id, "userId", content from reviews
        where "bookId" = $1
      `,
        [book.id]
      );
      const bookWithReviews = { ...book, reviews };
      booksArr.push(bookWithReviews);
    }
    return booksArr;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getBookById = async (bookId) => {
  try {
    const books = await getAllBooksWithReviews();
    const filtered = books.filter(book => book.id == bookId);
    return filtered;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createBook,
  getAllBooksNoReviews,
  getAllBooksWithReviews,
  getBookById,
};
