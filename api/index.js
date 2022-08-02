const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET = "fullstack" } = process.env;

const { getUserById } = require("../db");

// GET /api/health
router.get("/health", async (req, res, next) => {
  res.send({ message: "Hello, the server is healthy." });
  next();
});

// Authorization
router.use(async (req, res, next) => {
  const prefix = "Bearer ";
  const auth = req.header("Authorization");
  if (!auth) next();
  else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    try {
      const { id: userId } = jwt.verify(token, JWT_SECRET);
      if (userId) {
        req.user = await getUserById(userId);
        next();
      }
    } catch ({ name, message }) {
      next({ name, message });
    }
  } else {
    next({
      name: "Authorization Header Error",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

// ROUTER: /api/books
const booksRouter = require("./books");
router.use("/books", booksRouter);

// ROUTER: /api/authors
const authorsRouter = require("./authors");
router.use("/authors", authorsRouter);

// ROUTER: /api/users
const usersRouter = require("./users");
router.use("/users", usersRouter);

// ROUTER: /api/guests
const guestsRouter = require("./guests");
router.use("/guests", guestsRouter);

// ROUTER: /api/search
const searchRouter = require("./search");
router.use("/search", searchRouter);

// ORDERS: /api/orders
const ordersRouter = require("./orders");
router.use("/orders", ordersRouter);

// ADMIN: /api/admin
const adminRouter = require('./admin');
router.use("/admin", adminRouter);

module.exports = router;
