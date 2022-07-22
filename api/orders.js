const express = require("express");
const router = express.Router();

const { postAddToCart } = require("../db");
// POST /api/orders/cart
router.post("/cart", async (req, res, next) => {
  const { userId, price, bookId} = req.body;
  try {
    const result = await postAddToCart(userId, price, bookId);
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
