const express = require("express");
const router = express.Router();

const {
  postAddItemToCart,
  deleteItemFromCart,
  editCartQuantity,
  userCompleteOrder,
} = require("../db");

// POST /api/orders/cart
router.post("/cart", async (req, res, next) => {
  const { userId, bookPrice, bookId, quantity } = req.body;
  try {
    const result = await postAddItemToCart(userId, bookPrice, bookId, quantity);
    if (result.length) {
      res.send({
        name: "Cart Updated",
        message: "Item added to cart.",
      });
    } else {
      next({
        name: "Cart Not Updated",
        message: "An unknown error occurred. Please try again.",
      });
    }
  } catch (err) {
    next(err);
  }
});

// PATCH /api/orders/cart
router.patch("/cart", async (req, res, next) => {
  const { orderId, bookId, bookPrice, oldQuantity, newQuantity } =
    req.body;
  try {
    const result = await editCartQuantity(
      orderId,
      bookId,
      bookPrice,
      oldQuantity,
      newQuantity
    );
    if (result.length) {
      res.send({
        name: "Cart Updated",
        message: "Successfully changed number of items in your cart.",
      });
    } else {
      next({
        name: "Cart Not Updated",
        message: "An unknown error occurred. Please try again.",
      });
    }
  } catch (err) {
    next(err);
  }
});

// DELETE /api/orders/cart
router.delete("/cart", async (req, res, next) => {
  const { orderId, bookId, bookPrice, quantity } = req.body;
  try {
    const result = await deleteItemFromCart(
      orderId,
      bookId,
      bookPrice,
      quantity
    );
    if (result.length) {
      res.send({
        name: "Cart Updated",
        message: "Item deleted successfully from your cart.",
      });
    } else {
      next({
        name: "Cart Not Updated",
        message: "An unknown error occurred. Please try again.",
      });
    }
  } catch (err) {
    next(err);
  }
});

// POST /api/orders/:orderId
router.post("/:orderId", async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    next({
      name: "Authorization Error",
      message: "You must be logged in to perform this action.",
    });
  } else {
    const { orderId } = req.params;
    try {
      const result = await userCompleteOrder(orderId);
      if (result.isComplete) {
        res.send({
          name: "Order Complete",
          message: "Your order is complete. Thanks for your business!",
          result,
        });
      } else {
        next({
          name: "Order Not Complete",
          message: "An unknown error occurred. Please try again.",
        });
      }
    } catch (err) {
      next(err);
    }
  }
});

module.exports = router;
