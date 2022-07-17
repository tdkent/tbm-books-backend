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
    const { rows } = await client.query(`
      select * from users
      where "userEmail"=$1;
    `, [userEmail])
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
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
    const match = bcrpyt.compare(password, rows[0].password);
    return match ? rows : [];
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  checkUser,
};
