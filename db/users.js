const client = require("../client");
const bcrpyt = require("bcrypt");
const saltRounds = 10;

const createUser = async ({ userEmail, password }) => {
  try {
    const hash = await bcrpyt.hash(password, saltRounds);
    const { rows } = await client.query(
      `
      insert into users("userEmail", password)
      values($1, $2)
      returning id, "userEmail";
    `,
      [userEmail, hash]
    );
    return rows[0];
  } catch (err) {
    console.error("An error occurred in createUser:", err);
  }
};

const checkUser = async (userEmail, password) => {
  try {
    const { rows } = await client.query(
      `
      select id, "userEmail", password
      from users
      where "userEmail" = $1;
    `,
      [userEmail]
    );
    const match = await bcrpyt.compare(password, rows[0].password);
    return match ? rows : false;
  } catch (err) {
    console.error("An error occurred:", err);
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

const getUserById = async (userId) => {
  try {
    const { rows } = await client.query(
      `
      select id, "userEmail"
      from users
      where id = $1;
    `,
      [userId]
    );
    return rows[0];
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getUserByEmail = async (userEmail) => {
  try {
    const { rows } = await client.query(
      `
      select * from users
      where "userEmail"=$1;
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
  checkUser,
  getUserById,
};
