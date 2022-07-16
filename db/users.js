const client = require("../client");
const bcrpyt = require("bcrypt");
const saltRounds = 10;

const createUser = async ({ email, password }) => {
  try {
    const hash = await bcrpyt.hash(password, saltRounds);
    const { rows } = await client.query(
      `
      insert into users(email, password)
      values($1, $2)
      returning id, email;
    `,
      [email, hash]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred in createUser:", err);
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

const getUserByEmail = async (userEmail) => {
  try {
    const { rows } = await client.query(
      `
      select id, email from users
      where email = $1;
    `,
      [userEmail]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
};
