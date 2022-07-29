const express = require("express");
const router = express.Router();

const { getAuthorBooks } = require("../db");

//get api/authors/:authorName
router.get("/:authorName", async (req, res, next) => {
  const {authorName} = req.params
  try {
    const authorData = await getAuthorBooks(authorName);
    res.send(authorData);
  } catch(err) {
    next (err);
  }
});

module.exports = router;
