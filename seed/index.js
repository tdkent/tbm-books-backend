const client = require("../client");
const {dropTables, createTables} = require("./seedTables");
const { createAuthors, createBooks, createUsers, createOrders, createReviews } = require('./seedData')

const rebuildDB = async() => {
  try {
    await dropTables();
    await createTables();
    await createBooks();
    await createAuthors();
    await createUsers();
    await createOrders();
    await createReviews();
  }
  catch(err) {
    console.error("An error occurred:", err)
  }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());