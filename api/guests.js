const express = require("express");
const router = express.Router();

const {
  guestCheckout,
  guestCompleteOrder,
  guestCancelOrder,
} = require("../db");

// POST /api/guests/checkout
router.post("/checkout", async (req, res, next) => {
  const { guestEmail, guestCart } = req.body;
  try {
    const result = await guestCheckout(guestEmail, guestCart);
    if (result === "login") {
      next({
        name: "Guest Checkout Error",
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
  const { orderId, guestCart } = req.body;
  console.log(orderId, guestCart);
  try {
    const result = await guestCompleteOrder(orderId, guestCart);
    if (result.length) {
      res.send({
        name: "Order Complete",
        message: `Your order ID# ${orderId} is complete. Thanks for your business!`,
        details: result,
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

// DELETE /api/guests/checkout
router.delete("/checkout", async (req, res, next) => {
  const { orderId } = req.body;
  console.log("orderId", orderId);
  try {
    const result = await guestCancelOrder(orderId);
    if (result.length) {
      res.send({
        name: "Order Cancelled",
        message: "Your order has been cancelled.",
        id: result[0].id,
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
