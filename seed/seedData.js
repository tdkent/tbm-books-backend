const client = require("../client");
const faker = require("faker");
const {
  createBook,
  createUser,
  getAllUsers,
  createUserOrder,
  createOrderDetails,
  getAllUsersOrders,
  getAllBooks,
} = require("../db");

const { booksData } = require("./bookData");
const { usersData } = require("./usersData");
const { usersOrders, ordersDetails } = require("./ordersData");

const createBooks = async () => {
  try {
    console.log("Adding books to 'books' table...");
    const addKeysToBooksData = booksData.map((book) => {
      return {
        ...book,
        description: faker.lorem.paragraph(5),
        rating: Number((2 + Math.random() * 3).toFixed(1)),
        globalRatings: Math.floor(Math.random() * 5001),
        price: Number((Math.floor(Math.random() * 12) + 8.99).toFixed(2)),
        inventory: Math.floor(Math.random() * 91) + 10,
      };
    });
    const books = await Promise.all(addKeysToBooksData.map(createBook));
    console.log("Books created.");
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

const createOrders = async () => {
  try {
    console.log("Adding orders to users_orders table...");
    const [user1] = await getAllUsers();
    const [order1, order2, order3] = usersOrders;
    const data = [
      {
        userId: user1.id,
        isComplete: order1.isComplete,
        price: order1.price,
      },
      {
        userId: user1.id,
        isComplete: order2.isComplete,
        price: order2.price,
      },
      {
        userId: user1.id,
        isComplete: order3.isComplete,
        price: order3.price,
      },
    ];
    const newOrders = await Promise.all(data.map(createUserOrder));
    console.log("New orders added to users_orders: ", newOrders);
    const [userOrder1, userOrder2, userOrder3] = await getAllUsersOrders();
    const [book1, book2, book3, book4, book5, book6] = await getAllBooks();
    const [q1, q2] = ordersDetails;
    const detailsData = [
      {
        orderId: userOrder1.id,
        bookId: book1.id,
        quantity: q2.quantity,
      },
      {
        orderId: userOrder1.id,
        bookId: book2.id,
        quantity: q2.quantity,
      },
      {
        orderId: userOrder2.id,
        bookId: book3.id,
        quantity: q1.quantity,
      },
      {
        orderId: userOrder3.id,
        bookId: book4.id,
        quantity: q2.quantity,
      },
      {
        orderId: userOrder3.id,
        bookId: book5.id,
        quantity: q2.quantity,
      },
      {
        orderId: userOrder3.id,
        bookId: book6.id,
        quantity: q1.quantity,
      },
    ];
    const newOrdersDetails = await Promise.all(
      detailsData.map(createOrderDetails)
    );
    console.log(
      "New details added to orders_details table: ",
      newOrdersDetails
    );
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createBooks,
  createUsers,
  createOrders,
};
