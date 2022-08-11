const faker = require("faker");
const {
  createBook,
  createUser,
  createUserOrder,
  createOrderDetails,
  getOrdersPaginated,
  getAllFeatured,
} = require("../db");

const { booksData } = require("./bookData");

const createBooks = async () => {
  try {
    console.log("Adding books to 'books' table...");
    const assignGenre = () => {
      const genres = [
        "Comedy",
        "General Fiction",
        "Horror",
        "Mystery",
        "Romance",
        "Science-Fiction",
        "Thriller",
        "Rom-Com",
        "Classic",
        "Historical-Fiction"
      ];
      return genres[Math.floor(Math.random() * 10)];
    };
    const assignRating = () => Number((2 + Math.random() * 3).toFixed(1));
    const assignGlobalRating = () => Math.floor(Math.random() * 5001);
    const assignPrice = () =>
      Number((Math.floor(Math.random() * 12) + 8.99).toFixed(2));
    const assignInventory = () => Math.floor(Math.random() * 91) + 10;
    const addKeysToBooksData = booksData.map((book) => {
      return {
        ...book,
        genre: assignGenre(),
        description: faker.lorem.paragraph(5),
        rating: assignRating(),
        globalRatings: assignGlobalRating(),
        price: assignPrice(),
        inventory: assignInventory(),
      };
    });
    const books = await Promise.all(addKeysToBooksData.map(createBook));
    console.log(
      "Books created. Current count: 6139. Random example:",
      books[Math.floor(Math.random() * 6138)]
    );
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createUsers = async () => {
  try {
    console.log("Adding users to the 'users' table...");
    const createFakeUsers = () => {
      const arr = [];
      for (let i = 1; i <= 200; i++) {
        const fakeUser = {
          userEmail: faker.internet.email(),
          password: faker.internet.password(10),
          state: faker.address.stateAbbr(),
          city: faker.address.city(),
          street: faker.address.streetAddress(true),
          zip: faker.address.zipCode()
        };
        arr.push(fakeUser);
      }
      return arr;
    };
    const fakes = createFakeUsers();
    const usersData = [
      { userEmail: "fake1@fakemail.com", password: "password123" },
      { userEmail: "fake2@fakemail.com", password: "password123" },
      { userEmail: "admin@tbm.com", password: "admin123", isAdmin: true },
      ...fakes,
    ];
    const users = await Promise.all(usersData.map(createUser));
    console.log("Finished creating new users.");
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createOrders = async () => {
  try {
    console.log("Adding orders to users_orders table...");
    const createFakeOrders = () => {
      let arr = [];
      const fakeUserId = () => Math.floor(Math.random() * 198) + 3;
      const setStatus = () => {
        if (Math.round(Math.random())) return true;
        else return false;
      };
      for (let i = 1; i <= 450; i++) {
        const order = {
          userId: fakeUserId(),
          isComplete: setStatus(),
          orderPrice: faker.commerce.price(10, 400, 2),
        };
        arr.push(order);
      }
      return arr;
    };
    const fakes = createFakeOrders();
    const [book1, book2, book3, book4, book5, book6] = await getAllFeatured();
    const data = [
      {
        userId: 1,
        isComplete: true,
        orderPrice: Number(book1.price) * 2 + Number(book2.price),
      },
      {
        userId: 1,
        isComplete: true,
        orderPrice: Number(book4.price) * 2 + Number(book5.price),
      },
      {
        userId: 1,
        isComplete: false,
        orderPrice: Number(book6.price) * 4 + Number(book3.price),
      },
      ...fakes,
    ];
    const newOrders = await Promise.all(data.map(createUserOrder));
    console.log("New orders added to users_orders: ", newOrders);
    const [userOrder1, userOrder2, userOrder3] = await getOrdersPaginated(1);
    const detailsData = [
      {
        orderId: userOrder1.id,
        bookId: book1.id,
        bookPrice: book1.price,
        quantity: 2,
      },
      {
        orderId: userOrder1.id,
        bookId: book2.id,
        bookPrice: book2.price,
        quantity: 1,
      },
      {
        orderId: userOrder2.id,
        bookId: book4.id,
        bookPrice: book4.price,
        quantity: 2,
      },
      {
        orderId: userOrder2.id,
        bookId: book5.id,
        bookPrice: book5.price,
        quantity: 1,
      },
      {
        orderId: userOrder3.id,
        bookId: book6.id,
        bookPrice: book6.price,
        quantity: 4,
      },
      {
        orderId: userOrder3.id,
        bookId: book3.id,
        bookPrice: book3.price,
        quantity: 1,
      },
    ];
    const newOrdersDetails = await Promise.all(
      detailsData.map(createOrderDetails)
    );
    console.log("New details added to orders_details table: ", newOrdersDetails);
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createBooks,
  createUsers,
  createOrders,
};
