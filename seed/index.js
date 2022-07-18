const client = require("../client");
const {dropTables, createTables} = require("./seedTables");
const { createBooks, createUsers, createOrders } = require('./seedData')

const rebuildDB = async() => {
  try {
    await dropTables();
    await createTables();
    await createBooks();
    await createUsers();
    await createOrders();
  }
  catch(err) {
    console.error("An error occurred:", err)
  }
}

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());