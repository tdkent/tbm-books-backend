const client = require("../client");

const createUser = async ({ username, password }) => {
  try {
    const { rows } = await client.query(
      `
      insert into users(username, password)
      values($1, $2)
      returning id, username;
    `,
      [username, password]
    );
    return rows;
  } catch (err) {
    console.error("An occurred in createUser:", err);
  }
};

const getAllUsers = async () => {
  try {
    const { rows } = await client.query(`
      select * from users;
    `);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
