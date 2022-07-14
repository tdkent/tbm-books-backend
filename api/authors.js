const express = require("express");
const router = express.Router();

const { getAllAuthorsYesBooks, getAuthorById } = require("../db");

// GET api/authors
router.get("/", async (req, res, next) => {
  try {
    const data = await getAllAuthorsYesBooks();
    res.send(data);
  } catch (err) {
    next(err);
  }
});

// GET api/authors/:authorId
router.get("/:authorId", async (req, res, next) => {
  const { authorId } = req.params;
  try {
    const author = await getAuthorById(authorId);
    res.send(author);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
