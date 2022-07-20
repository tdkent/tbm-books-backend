const express = require("express");
const router = express.Router();

const { searchBasic } = require("../db");

// GET /api/search/:usersearch
router.get("/:searchstring", async (req, res, next) => {
  const { searchstring } = req.params;
  try {
    const result = await searchBasic(searchstring);
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
