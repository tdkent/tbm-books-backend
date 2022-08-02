const express = require("express");
const router = express.Router();

const { guestCheckout } = require("../db/guests");

// POST /api/guests/checkout
router.post("/checkout", async (req, res, next) => {
  const { guestEmail, guestCart } = req.body;
  try {
    const result = await guestCheckout(guestEmail, guestCart);
    if (result === "LoginRequired") {
      next({
        name: "Authentication Error",
        message: `The email address ${guestEmail} is already registered with TBM Books. Log in to your account?`,
      });
    } else res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
