const client = require("../client");
const { createBook, createAuthor, createUser, createOrder, createReview } = require("../db");

const createBooks = async () => {
  try {
    console.log("Adding books to 'books' table...");
    const data = [
      { title: "Pride and Prejudice", year: 1813 },
      { title: "The Time Machine", year: 1900 },
      { title: "Dracula", year: 1895 },
    ];
    const books = await Promise.all(data.map(createBook));
    console.log("Books created:", books);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createAuthors = async () => {
  try {
    console.log("Adding authors to 'authors' table...");
    const data = [
      { firstName: "Jane", lastName: "Austen" },
      { firstName: "H.G.", lastName: "Wells" },
      { firstName: "Bram", lastName: "Stoker" },
    ];
    const authors = await Promise.all(data.map(createAuthor));
    console.log("Finished adding authors:", authors);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createUsers = async () => {
  try {
    console.log("Adding users to the 'users' table...");
    const data = [
      { username: "tim", password: "kent123" },
      { username: "sarah", password: "pesch123" },
      { username: "peter", password: "sam123" },
    ];
    const users = await Promise.all(data.map(createUser));
    console.log("Users created:", users);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createOrders = async () => {
  try {
    console.log("Adding orders to the 'orders' table...");
    const data = [
      { quantity: 1, price: 10.99 },
      { quantity: 2, price: 25.99 },
      { quantity: 1, price: 40.15 },
    ];
    const orders = await Promise.all(data.map(createOrder));
    console.log("Orders created:", orders);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createReviews = async () => {
  try {
    console.log("Adding reviews to the 'reviews' table...");
    const data = [
      {
        userId: 2,
        bookId: 1,
        content: "Like it so much I named my cat after it!",
      },
      { userId: 1, bookId: 2, content: "A thrilling adventure." },
      { userId: 3, bookId: 3, content: "Meh." },
    ];
    const reviews = await Promise.all(data.map(createReview))
    console.log("Reviews created:", reviews);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createBooks,
  createAuthors,
  createUsers,
  createOrders,
  createReviews,
};
