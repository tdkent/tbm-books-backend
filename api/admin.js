const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getAllUsersOrders,
  deactivateUser,
  promoteUser,
} = require("../db");

// USERS
// GET /api/admin/users/all-users
router.get("/users/all-users", async (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    try {
      const result = await getAllUsers();
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
});

// PATCH /api/admin/users/deactivate
router.patch("/users/deactivate", async (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    const { userId } = req.body;
    try {
      const result = await deactivateUser(userId);
      if (!result.length) {
        res.status(400);
        next({
          name: "Action Forbidden",
          message: `User id# ${userId} could not be deactivated.`,
        });
      } else
        res.send({
          name: "User Deactivated",
          message: `User ID# ${userId} has been deactivated.`,
        });
    } catch (err) {
      next(err);
    }
  }
});

//PATCH /api/admin/users/promote
router.patch("/users/promote", async (req, res, next) => {
  const { userId } = req.body;
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    try {
      const result = await promoteUser(userId);
      if (!result.length) {
        res.status(400);
        next({
          name: "Action Forbidden",
          message: `User id# ${userId} could not be promoted to admin.`,
        });
      } else {
        res.send({
          name: "User Promoted to Admin",
          message: `User ID# ${userId} is now an administrator!`,
        });
      }
    } catch (err) {
      next(err);
    }
  }
});

// ORDERS
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
