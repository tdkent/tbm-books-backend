const client = require("../client");

const dropTables = async () => {
  try {
    console.log("Dropping tables...");
    await client.query(`
      drop table if exists orders_details;
      drop table if exists users_orders;
      drop table if exists users;
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
        isbn varchar(255) not null,
        title varchar(255) not null,
        author varchar(255) not null,
        year varchar(255),
        publisher varchar(255),
        "imageLinkS" text,
        "imageLinkM" text,
        "imageLinkL" text,
        genre varchar(255) not null,
        description text not null,
        rating numeric not null,
        "globalRatings" int not null,
        price numeric not null,
        inventory smallint not null,
        "isFeatured" boolean default false
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
        "orderPrice" numeric not null
      );
      create table orders_details(
        id serial primary key,
        "orderId" smallint references users_orders(id),
        "bookId" smallint references books(id),
        "bookPrice" numeric,
        quantity smallint
      );
    `);
    console.log("Finished building new tables.");
  } catch (err) {
    console.error("An error occurred: ", err);
  }
};

module.exports = { dropTables, createTables };
