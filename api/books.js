const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookById,
  getAllBooksByGenre,
  getBooksCuratedRankings,
  getBooksCuratedRatings,
  getAllFeatured,
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
    console.log("genre", genre);
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

// GET /api/books/lists/top-ten-rankings
router.get("/lists/curated-rankings", async (req, res, next) => {
  try {
    const result = await getBooksCuratedRankings();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

//GET api/books/lits/curated-ratings
router.get("/lists/curated-ratings", async (req, res, next) => {
  try {
    const result = await getBooksCuratedRatings();
    res.send(result);
    } catch (err) {
    next(err);
  }
});
    
// GET /api/books/lists/featured
router.get("/lists/featured", async (req, res, next) => {
  try {
    const data = await getAllFeatured();
    res.send(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
