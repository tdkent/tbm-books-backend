const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

const { getUserByEmail, createUser, checkUser } = require("../db");

// POST /api/users/register
router.post("/register", async (req, res, next) => {
  const { userEmail, password } = req.body;
  try {
    const check = await getUserByEmail(userEmail);
    if (check.id) {
      next({
        name: "Registration Error",
        message: `An account using ${userEmail} already exists.`,
      });
    } else if (password === "password") {
      next({
        name: "Registration Error",
        message: "Password needs to not be 'password!'.",
      });
    } else {
      const newUser = createUser({ userEmail, password });
      const token = jwt.sign(
        { id: newUser.id, email: newUser.email },
        secret.jwtSecret
      );
      res.send({
        message: `New account created using ${userEmail}. Thanks for signing up!`,
        token,
        id: newUser.id,
      });
    }
  } catch (err) {
    next(err);
  }
});

// POST /api/users/login
router.post("/login", async (req, res, next) => {
  const { userEmail, password } = req.body;
  try {
    const check = await getUserByEmail(userEmail);
    if (!check.length) {
      next({
        name: "Authorization Error",
        message: `No accounts exist for user ${userEmail}. Please try again, or create an account.`,
      });
    } else {
      const user = await checkUser({ userEmail, password });
      if (!user.length) {
        next({
          name: "Authorization Error",
          message: "Incorrect password. Please try again.",
        });
      } else {
        const token = jwt.sign(
          { id: user.id, email: user.email },
          secret.jwtSecret
        );
        res.send({
          message: `Welcome back, ${user.email}. You're logged in!`,
          token,
          id: user.id,
        });
      }
    }
  } catch (err) {
    next(err);
  }
});


module.exports = router;