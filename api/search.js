const express = require("express");
const router = express.Router();

const { searchBasic } = require("../db");

// GET /api/search/:usersearch
router.get("/:searchString", async (req, res, next) => {
  const { searchString } = req.params;
  try {
    console.log(req.params, searchString);
    const result = await searchBasic(searchString);
    if (!result.length) {
      next({
        name: "No Results Error",
        message: "Your search returned no results. Please try again.",
      });
    } else {
      res.send(result);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
