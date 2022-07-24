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












// // GET api/authors
// router.get("/", async (req, res, next) => {
//   try {
//     const data = await getAllAuthorsYesBooks();
//     res.send(data);
//   } catch (err) {
//     next(err);
//   }
// });

// // GET api/authors/:authorId
// router.get("/:authorId", async (req, res, next) => {
//   const { authorId } = req.params;
//   try {
//     const author = await getAuthorById(authorId);
//     res.send(author);
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
