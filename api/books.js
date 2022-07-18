const express = require("express");
const router = express.Router();

const { getAllBooks, getBookById } = require("../db");

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

module.exports = router;
