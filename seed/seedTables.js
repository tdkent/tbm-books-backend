const client = require("../client");

const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`
      drop table if exists orders;
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
      create table authors(
        id serial primary key,
        "firstName" varchar(100) not null,
        "lastName" varchar(100) not null,
        biography text not null
      );
      create table books(
        id serial primary key,
        "authorId" smallint references authors(id),
        title varchar(255) not null,
        year smallint not null,
        pages smallint not null,
        description text not null,
        price numeric not null,
        inventory numeric not null,
        imageLink text not null
      );
      create table users(
        id serial primary key,
        email varchar(100) unique not null,
        password varchar(255) not null
      );
      create table reviews(
        id serial primary key,
        "userId" smallint references users(id),
        "bookId" smallint references books(id),
        content text not null
      );
      create table orders(
        id serial primary key,
        "isUser" boolean,
        "isGuest" boolean, 
        quantity smallint not null,
        price numeric not null
      );
    `);
    console.log("Finished building new tables.");
  } catch (err) {
    console.error("An error occurred: ", err);
  }
};

module.exports = { dropTables, createTables };
