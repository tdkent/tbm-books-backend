const client = require("../client");
const {dropTables, createTables} = require("./seedTables");
const { createAuthors, createBooks, createUsers, createOrders, createReviews } = require('./seedData')

const rebuildDB = async() => {
  try {
    await dropTables();
    await createTables();
    await createAuthors();
    await createBooks();
    await createUsers();
    await createReviews();
    await createOrders();
  }
  catch(err) {
    console.error("An error occurred:", err)
  }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());