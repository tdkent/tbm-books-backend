const express = require("express");
const router = express.Router();

const { getResultsCount, searchBasicPaginated } = require("../db");

// GET /api/:searchString
router.get("/:searchString", async(req, res, next) => {
  const { searchString } = req.params;
  try {
    const result = await getResultsCount(searchString);
    res.send(result);
  }
  catch(err){next(err);};
})

// GET /api/search/:searchString/:currentPage
router.get("/:searchString/:currentPage", async (req, res, next) => {
  const { searchString, currentPage } = req.params;
  try {
    const result = await searchBasicPaginated(searchString, currentPage);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
