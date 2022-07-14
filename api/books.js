const express = require("express");
const router = express.Router();

const { getAllBooksWithReviews, getBookById } = require("../db");

// GET /api/books
router.get("/", async (req, res, next) => {
  try {
    const data = await getAllBooksWithReviews();
    res.send(data);
  } catch (err) {
    next(err);
  }
});

// GET /api/books/:bookId
router.get("/:bookId", async (req, res, next) => {
  const { bookId } = req.params;
  try {
    const book = await getBookById(bookId);
    res.send(book);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
