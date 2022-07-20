const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  getAllBooksByGenre,
  getBooksMostGlobalRatings,
  getBooksHighestRatings,
  getBooksTopTens,
} = require("../db");

// GET /api/books
router.get("/", async (req, res, next) => {
  try {
    const data = await getAllBooks();
    res.send(data);
  } catch (err) {
    next(err);
  }
});

// GET /api/books/:id
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await getBookById(id);
    res.send(book);
  } catch (err) {
    next(err);
  }
});

// GET /api/books/genre/:genre
router.get("/genre/:genre", async (req, res, next) => {
  const { genre } = req.params;
  try {
    const result = await getAllBooksByGenre(genre);
    if (!result.length)
      next({
        name: "No Results Error",
        message: "No results found for that genre. Please try again.",
      });
    else res.send(result);
  } catch (err) {
    next(err);
  }
});

// GET /api/books/lists/top-tens
router.get("/lists/top-tens", async (req, res, next) => {
  try {
    const result = await getBooksTopTens();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
