const client = require("../client");

const createAuthor = async ({ firstName, lastName, biography }) => {
  try {
    const { rows } = await client.query(
      `
      insert into authors("firstName", "lastName", biography)
      values ($1, $2, $3)
      returning *;
    `,
      [firstName, lastName, biography]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred in createAuthor: ", err);
  }
};

const getAllAuthorsNoBooks = async () => {
  try {
    const { rows } = await client.query(`
      select * from authors;
    `);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getAllAuthorsYesBooks = async () => {
  try {
    const { rows: authors } = await client.query(`
      select * from authors
    `);
    let authorsArr = [];
    for (const author of authors) {
      const { rows: books } = await client.query(
        `
        select * from books
        where "authorId" = $1;
      `,
        [author.id]
      );
      const authorData = { ...author, books };
      authorsArr.push(authorData);
    }
    return authorsArr;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getAuthorById = async (authorId) => {
  try {
    const authors = await getAllAuthorsYesBooks();
    const filtered = authors.filter((author) => {
      return author.id == authorId;
    });
    return filtered;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createAuthor,
  getAllAuthorsNoBooks,
  getAllAuthorsYesBooks,
  getAuthorById,
};
