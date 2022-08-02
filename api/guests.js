const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const { guestCheckout, guestCompleteOrder } = require("../db/guests");

// POST /api/guests/checkout
router.post("/checkout", async (req, res, next) => {
  const { guestEmail, guestCart } = req.body;
  try {
    const result = await guestCheckout(guestEmail, guestCart);
    if (result === "login") {
      next({
        name: "Authentication Error",
        message: `The email address ${guestEmail} is already registered with TBM Books. Log in to your account?`,
      });
    } else if (result.status === "checkout") {
      res.send(result);
    }
  } catch (err) {
    next(err);
  }
});

// PATCH /api/guests/checkout
router.patch("/checkout", async (req, res, next) => {
  const { orderId } = req.body;
  try {
    const result = await guestCompleteOrder(orderId);
    if (result.length) {
      next({
        name: "Order Complete",
        message: `Your order ID# ${orderId} is complete. Thanks for your business!`,
      });
    } else {
      next({
        name: "Fulfillment Error",
        message:
          "An unknown error occurred while trying to close your order. Sorry about that.",
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
