const client = require("../client");

const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`
      drop table if exists orders_details;
      drop table if exists users_orders;
      drop table if exists reviews;
      drop table if exists users;
      drop table if exists books;
      drop table if exists authors;
    `);
    console.log("Dropping tables complete.");
  } catch (err) {
    console.error("An error occurred: ", err);
  }
};

const createTables = async () => {
  try {
    console.log("Building new tables...");
    await client.query(`
      create table books(
        id serial primary key,
        isbn varchar(255),
        title varchar(255),
        author varchar(255),
        year varchar(255),
        publisher varchar(255),
        imageLinkS text,
        imageLinkM text,
        imageLinkL text,
        description text,
        rating numeric,
        globalRatings numeric,
        price numeric,
        inventory smallint
      );
      create table users(
        id serial primary key,
        "userEmail" varchar(255) unique not null,
        password varchar(255) not null
      );
      create table users_orders(
        id serial primary key,
        "userId" smallint references users(id),
        "isComplete" boolean default false,
        price numeric not null
      );
      create table orders_details(
        id serial primary key,
        "orderId" smallint references users_orders(id),
        "bookId" smallint references books(id),
        quantity smallint not null
      );
    `);
    console.log("Finished building new tables.");
  } catch (err) {
    console.error("An error occurred: ", err);
  }
};

module.exports = { dropTables, createTables };
