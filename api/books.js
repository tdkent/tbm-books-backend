const express = require("express");
const router = express.Router();

const {
  getBookById,
  getBooksByGenrePaginated,
  getBooksCuratedRankings,
  getBooksCuratedRatings,
  getAllFeatured,
  getCountByGenre,
} = require("../db");

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

//GET /api/books/count/:genre
router.get("/count/:genre", async (req, res, next) => {
  const { genre } = req.params;
  try {
    const count = await getCountByGenre(genre);
    res.send(count);
  } catch (err) {
    next(err);
  }
});

// GET /api/books/genre/:genre/:currentPage
router.get("/genre/:genre/:currentPage", async (req, res, next) => {
  const { genre, currentPage } = req.params;
  try {
    const result = await getBooksByGenrePaginated(genre, currentPage);
    res.send(result);
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
