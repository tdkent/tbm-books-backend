const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

const {getUserByEmail, createUser} = require('../db')

// POST /api/register
router.post("/register", (req, res, next) => {
  const { userEmail, password } = req.body
  try {
    const check = await getUserByEmail(userEmail);
    if(check.length) {
      next({
        name: "Registration Error",
        message: `An account using ${userEmail} already exists.`
      })
    } else if(password.length < 8) {
      next({
        name: "Registration Error",
        message: "Passwords need to be least characters long."
      })
    } else {
      const newUser = createUser({ userEmail, password})
      const token = jwt.sign({id: newUser.id, email: newUser.email}, secret.jwtSecret);
      res.send({
        message: `New account created using ${userEmail}. Thanks for signing up!`,
        token,
        user: { id: newUser.id }
      })
    }
  } catch (err) {
    next(err);
  }
});
