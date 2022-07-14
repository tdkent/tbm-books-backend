const express = require('express');
const router = express.Router();

// GET /api/health
router.get("/health", async (req, res, next) => {
  res.send({ message: "Hello, the server is healthy." });
  next();
});

// ROUTER: /api/books
const booksRouter = require('./books');
router.use("/books", booksRouter);

// ROUTER: /api/authors
const authorsRouter = require('./authors');
router.use('/authors', authorsRouter);

module.exports = router;