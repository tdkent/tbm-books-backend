const client = require("../client");
const {
  createBook,
  createAuthor,
  createUser,
  createOrder,
  createReview,
  getAllAuthorsNoBooks,
  getAllBooksNoReviews,
  getAllUsers,
} = require("../db");
const { authorsData } = require("./authorData");
const { booksData } = require("./bookData");
const { reviewsData } = require("./reviewsData");
const { usersData } = require("./usersData");

const createAuthors = async () => {
  try {
    console.log("Adding authors to 'authors' table...");
    const authors = await Promise.all(authorsData.map(createAuthor));
    console.log("Finished adding authors:", authors);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createBooks = async () => {
  try {
    console.log("Adding books to 'books' table...");
    const [austen, melville] = await getAllAuthorsNoBooks();
    const [pride, sense, emma, mansfield, moby] = booksData;
    const data = [
      { authorId: austen.id, ...pride },
      { authorId: austen.id, ...sense },
      { authorId: austen.id, ...emma },
      { authorId: austen.id, ...mansfield },
      { authorId: melville.id, ...moby },
    ];
    const books = await Promise.all(data.map(createBook));
    console.log("Books created:", books);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createUsers = async () => {
  try {
    console.log("Adding users to the 'users' table...");
    const users = await Promise.all(usersData.map(createUser));
    console.log("Users created:", users);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

// const createOrders = async () => {
//   try {
//     console.log("Adding orders to the 'orders' table...");
//     const data = [
//       { quantity: 1, price: 10.99 },
//       { quantity: 2, price: 25.99 },
//       { quantity: 1, price: 40.15 },
//     ];
//     const orders = await Promise.all(data.map(createOrder));
//     console.log("Orders created:", orders);
//   } catch (err) {
//     console.error("An error occurred:", err);
//   }
// };

const createReviews = async () => {
  try {
    console.log("Adding reviews to the 'reviews' table...");
    const [pride, sense, emma, mansfield, moby] = await getAllBooksNoReviews();
    const [tim, sarah, peter, joseph] = await getAllUsers();
    const [prideReview, senseReview, emmaReview, mansfieldReview, mobyReview] =
      reviewsData;
    const data = [
      {
        userId: tim.id,
        bookId: pride.id,
        ...prideReview,
      },
      {
        userId: sarah.id,
        bookId: sense.id,
        ...senseReview,
      },
      {
        userId: peter.id,
        bookId: emma.id,
        ...emmaReview,
      },
      {
        userId: joseph.id,
        bookId: mansfield.id,
        ...mansfieldReview,
      },
      {
        userId: tim.id,
        bookId: moby.id,
        ...mobyReview,
      },
    ];
    const reviews = await Promise.all(data.map(createReview));
    console.log("Reviews created:", reviews);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createBooks,
  createAuthors,
  createUsers,
  // createOrders,
  createReviews,
};
