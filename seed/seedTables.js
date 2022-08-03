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
        year varchar(255) not null,
        publisher varchar(255) not null,
        "imageLinkS" text not null,
        "imageLinkM" text not null,
        "imageLinkL" text not null,
        genre varchar(255) not null,
        description text not null,
        rating numeric,
        "globalRatings" int,
        price numeric not null,
        inventory smallint not null,
        "isFeatured" boolean,
        "isActive" boolean default true
      );
      create table users(
        id serial primary key,
        "userEmail" varchar(255) unique not null,
        password varchar(255) not null,
        "isAdmin" boolean default false,
        "isGuest" boolean default false,
        "isActive" boolean default true
        state varchar(255) default 'CA',
        city varchar(255) default 'Los Angeles',
        zip varchar(255) default '90278',
        street varchar(255) default '117 Marshallfield lane'
        
      );
      create table users_orders(
        id serial primary key,
        "userId" smallint references users(id) not null,
        "isComplete" boolean default false,
        "orderPrice" numeric(6, 2) not null
      );
      create table orders_details(
        id serial primary key,
        "orderId" smallint references users_orders(id) not null,
        "bookId" smallint references books(id) not null,
        "bookPrice" numeric(4, 2),
        quantity smallint not null
      );
    `);
    console.log("Finished building new tables.");
  } catch (err) {
    console.error("An error occurred: ", err);
  }
};

module.exports = { dropTables, createTables };
