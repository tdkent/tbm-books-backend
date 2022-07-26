const express = require("express");
const router = express.Router();

const { searchBasic } = require("../db");

// GET /api/search/:usersearch
router.get("/:searchString", async (req, res, next) => {
  const { searchString } = req.params;
  try {
    const result = await searchBasic(searchString);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
