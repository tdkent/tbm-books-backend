const client = require("../client");

const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`
      drop table if exists reviews;
      drop table if exists orders;
      drop table if exists users;
      drop table if exists authors;
      drop table if exists books;
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
        title varchar(255) not null,
        year smallint not null
      );
      create table authors(
        id serial primary key,
        "firstName" varchar(255) not null,
        "lastName" varchar(255) not null
      );
      create table users(
        id serial primary key,
        username varchar(255) unique not null,
        password varchar(255) not null
      );
      create table orders(
        id serial primary key, 
        quantity smallint not null,
        price numeric not null
      );
      create table reviews(
        id serial primary key,
        "userId" smallint references users(id) not null,
        "bookId" smallint references books(id) not null,
        content varchar(255) unique not null
      );
    `);
    console.log("Finished building new tables.");
  } catch (err) {
    console.error("An error occurred: ", err);
  }
};

module.exports = { dropTables, createTables };
