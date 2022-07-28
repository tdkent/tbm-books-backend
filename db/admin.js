const client = require("../client");

// Users Admin Functions

const getAllUsers = async () => {
  try {
    const { rows } = await client.query(`
      select id, "userEmail", "isAdmin", "isActive" from users;
    `);
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const deactivateUser = async (userId) => {
  try {
    const { rows: check } = await client.query(
      `
      select "isAdmin" from users
      where id = $1;
    `,
      [userId]
    );
    if (check[0].isAdmin) {
      return [];
    } else {
      const { rows } = await client.query(
        `
      update users
      set "isActive" = false
      where id = $1
      returning id;
    `,
        [userId]
      );
      return rows;
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const promoteUser = async (userId) => {
  try {
    const { rows: check } = await client.query(
      `
      select "isAdmin", "isActive" from users
      where id = $1;
    `,
      [userId]
    );
    if (check[0].isAdmin || !check[0].isActive) return [];
    else {
      const { rows } = await client.query(
        `
        update users
        set "isAdmin" = true
        where id = $1
        returning id;
      `,
        [userId]
      );
      return rows;
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  getAllUsers,
  deactivateUser,
  promoteUser,
};
