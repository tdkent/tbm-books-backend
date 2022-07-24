const express = require("express");
const router = express.Router();

const { postAddItemToCart, deleteItemFromCart } = require("../db");

// POST /api/orders/cart
router.post("/cart", async (req, res, next) => {
  const { userId, bookPrice, bookId, quantity } = req.body;
  try {
    const result = await postAddItemToCart(userId, bookPrice, bookId, quantity);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/orders/cart
router.delete("/cart", async (req, res, next) => {
  const { orderId, orderPrice, bookId, bookPrice, quantity } = req.body;
  console.log(orderId, orderPrice, bookId, bookPrice, quantity);
  try {
    const result = await deleteItemFromCart(orderId, orderPrice, bookId, bookPrice, quantity);
    console.log("result of book delete:", result);
    if (result.length) {
      res.send({
        name: "Cart Updated",
        message: "Item deleted successfully from your cart.",
      });
    } else {
      res.send({
        name: "Cart Not Updated",
        message: "An unknown error occurred. Please try again.",
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
