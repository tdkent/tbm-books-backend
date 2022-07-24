const express = require("express");
const router = express.Router();

const { postAddItemToCart } = require("../db");

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

module.exports = router;
