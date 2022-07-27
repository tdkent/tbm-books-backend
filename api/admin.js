const express = require("express");
const router = express.Router();

const {
  getAllUsersOrders,
} = require("../db");

// GET /api/admin/all-orders
router.get("/all-orders", async (req, res, next) => {
  try {
    const result = await getAllUsersOrders();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
