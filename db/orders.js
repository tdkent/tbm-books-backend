const client = require('../client');

const createOrder = async({quantity, price}) => {
  try {
    const { rows } = await client.query(`
      insert into orders(quantity, price)
      values($1, $2)
      returning *;
    `, [quantity, price]);
    return rows;
  }
  catch(err) {
    console.error("An error occurred in createOrder:", err);
  }
}

module.exports = {
  createOrder,
}