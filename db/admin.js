const client = require("../client");

// Users Admin Functions

const getTotalUsersCount = async () => {
  try {
    const { rows } = await client.query(`
      select count(*) from users;
    `);
    return rows[0].count;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getUsersPaginated = async (currentPage) => {
  try {
    const startIdx = currentPage * 100 - 99;
    const endIdx = startIdx + 99;
    const { rows } = await client.query(
      `
      select * from users
      where id between $1 and $2
      order by id asc;
    `,
      [startIdx, endIdx]
    );
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

// Orders Admin Functions

const getTotalOrdersCount = async () => {
  try {
    const { rows } = await client.query(`
      select count(*) from users_orders;
    `);
    return rows[0].count;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getOrdersPaginated = async (currentPage) => {
  try {
    // const startIdx = currentPage * 100 - 99;
    // const endIdx = startIdx + 99;
    const offset = (currentPage - 1) * 100;
    const { rows } = await client.query(
      `
      select users_orders.*, users."userEmail"
      from users_orders
      join users on users.id = users_orders."userId"
      limit 100 offset $1;
    `,
      [offset]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getOrdersClosed = async (currentPage) => {
  try {
    // const startIdx = currentPage * 100 - 99;
    // const endIdx = startIdx + 99;
    const offset = (currentPage - 1) * 100;
    const { rows } = await client.query(
      `
      select users_orders.*, users."userEmail" from users_orders
      join users on users.id = users_orders."userId"
      where users_orders."isComplete" = true
      limit 100 offset $1;
    `,
      [offset]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getOrdersOpen = async (currentPage) => {
  try {
    // const startIdx = currentPage * 100 - 99;
    // const endIdx = startIdx + 99;
    const offset = (currentPage - 1) * 100;
    const { rows } = await client.query(
      `
      select users_orders.*, users."userEmail" from users_orders
      join users on users.id = users_orders."userId"
      where users_orders."isComplete" = false
      limit 100 offset $1;
    `,
      [offset]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

// Books Admin Functions

const getBooksPaginated = async (currentPage) => {
  try {
    const startIdx = currentPage * 100 - 99;
    const endIdx = startIdx + 99;
    const { rows } = await client.query(
      `
      select * from books
      where id between $1 and $2
      order by id asc;
    `,
      [startIdx, endIdx]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const getTotalProductsCount = async () => {
  try {
    const { rows } = await client.query(`
      select count(*) from books;
    `);
    return rows[0].count;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const createNewBook = async (
  isbn,
  title,
  author,
  year,
  publisher,
  imageLink,
  genre,
  description,
  price,
  inventory
) => {
  try {
    const { rows } = await client.query(
      `
      insert into books (isbn, title, author, year, publisher, "imageLinkS", "imageLinkM", "imageLinkL", genre, description, price, inventory)
      values ($1, $2, $3, $4, $5, $6, $6, $6, $7, $8, $9, $10)
      returning *;
    `,
      [
        isbn,
        title,
        author,
        year,
        publisher,
        imageLink,
        genre,
        description,
        price,
        inventory,
      ]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const editBook = async ({ bookId, ...fields }) => {
  const {
    isbn,
    title,
    author,
    year,
    publisher,
    imageLink,
    genre,
    description,
    price,
    inventory,
  } = fields;
  try {
    const { rows } = await client.query(
      `
      update books set
        isbn = coalesce($1, isbn), 
        title = coalesce($2, title),
        author = coalesce($3, author), 
        year = coalesce($4, year),
        publisher = coalesce($5, publisher),
        "imageLinkS" = coalesce($6, "imageLinkS"), 
        "imageLinkM" = coalesce($6, "imageLinkM"),
        "imageLinkL" = coalesce($6, "imageLinkL"),
        genre = coalesce($7, genre),
        description = coalesce($8, description),
        price = coalesce($9, price),
        inventory = coalesce($10, inventory)
      where id = $11
      and ($1 is distinct from isbn or
           $2 is distinct from title or
           $3 is distinct from author or
           $4 is distinct from year or
           $5 is distinct from publisher or
           $6 is distinct from "imageLinkS" or
           $6 is distinct from "imageLinkM" or
           $6 is distinct from "imageLinkL" or
           $7 is distinct from genre or
           $8 is distinct from description or
           $9 is distinct from price or
           $10 is distinct from inventory)
      returning *;
    `,
      [
        isbn,
        title,
        author,
        year,
        publisher,
        imageLink,
        genre,
        description,
        price,
        inventory,
        bookId,
      ]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

const deactivateBook = async (bookId) => {
  try {
    const { rows } = await client.query(
      `
      update books
      set "isActive" = false
      where id = $1
      returning id;
    `,
      [bookId]
    );
    return rows;
  } catch (err) {
    console.error("An error occurred:", err);
  }
};

module.exports = {
  getUsersPaginated,
  getTotalUsersCount,
  deactivateUser,
  promoteUser,
  getBooksPaginated,
  createNewBook,
  deactivateBook,
  editBook,
  getTotalProductsCount,
  getOrdersPaginated,
  getTotalOrdersCount,
  getOrdersClosed,
  getOrdersOpen,
};
