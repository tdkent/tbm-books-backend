const express = require("express");
const router = express.Router();

// POST /api/register
router.post("/register", (req, res, next) => {
  try {
    // check if user email is already claimed, return error if so
    // if not, hash password, and add username and password to users database
    // generate token, send confirmation message and token back to user
  } catch (err) {
    next(err);
  }
});
