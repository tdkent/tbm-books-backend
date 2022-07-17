const client = require("../client");
const {
  createBook,
  createAuthor,
  createUser,
  createReview,
  getAllAuthorsNoBooks,
  getAllBooksNoReviews,
  getAllUsers,
  createUserOrder,
  createOrderDetails,
  getAllUsersOrders,
  getCompleteOrderById,
  getUserProfileById,
} = require("../db");
const { authorsData } = require("./authorData");
const { booksData } = require("./bookData");
const { reviewsData } = require("./reviewsData");
const { usersData } = require("./usersData");
const { usersOrders, ordersDetails } = require("./ordersData");

const createAuthors = async () => {
  try {
    console.log("Adding authors to 'authors' table...");
    const authors = await Promise.all(authorsData.map(createAuthor));
    // console.log("Finished adding authors:", authors);
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
    // console.log("Books created:", books);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createUsers = async () => {
  try {
    console.log("Adding users to the 'users' table...");
    const users = await Promise.all(usersData.map(createUser));
    // console.log("Users created:", users);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

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
    // console.log("Reviews created:", reviews);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createOrders = async () => {
  try {
    console.log("Adding orders to users_orders table...");
    const [tim] = await getAllUsers();
    const [order1, order2, order3] = usersOrders;
    const data = [
      {
        userId: tim.id,
        isComplete: order1.isComplete,
        price: order1.price,
      },
      {
        userId: tim.id,
        isComplete: order2.isComplete,
        price: order2.price,
      },
      {
        userId: tim.id,
        isComplete: order3.isComplete,
        price: order3.price,
      },
    ];
    const newOrders = await Promise.all(data.map(createUserOrder));
    // console.log("New orders added to users_orders: ", newOrders);
    const [userOrder1, userOrder2, userOrder3] = await getAllUsersOrders();
    const [pride, sense, emma, mansfield, moby] = await getAllBooksNoReviews();
    const [q1, q2] = ordersDetails;
    const detailsData = [
      {
        orderId: userOrder1.id,
        bookId: pride.id,
        quantity: q2.quantity,
      },
      {
        orderId: userOrder1.id,
        bookId: moby.id,
        quantity: q2.quantity,
      },
      {
        orderId: userOrder2.id,
        bookId: sense.id,
        quantity: q1.quantity
      },
      {
        orderId: userOrder3.id,
        bookId: emma.id,
        quantity: q2.quantity
      },
      {
        orderId: userOrder3.id,
        bookId: mansfield.id,
        quantity: q2.quantity
      },
      {
        orderId: userOrder3.id,
        bookId: moby.id,
        quantity: q1.quantity
      }
    ];
    const newOrdersDetails = await Promise.all(detailsData.map(createOrderDetails));
    // console.log("New details added to orders_details table: ", newOrdersDetails);
    let orderId = userOrder1.id;
    const details = await getCompleteOrderById(orderId);
    // console.log("details: ", details);
    let userId = tim.id;
    const userProfile = await getUserProfileById(userId);
    //console.log("user profile: ", userProfile);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createBooks,
  createAuthors,
  createUsers,
  createReviews,
  createOrders,
};
