const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const {
  getUserByUserEmail,
  createUser,
  checkUser,
  getUserProfileById,
  getUserCartById,
  editUserAddress,
  guestToRegisterCart,
  guestToUser,
  guestToLoginCart,
  getUserWishlist,
  postItemToWishlist,
  deleteBookFromWishlist,
} = require("../db");

// POST /api/users/register
router.post("/register", async (req, res, next) => {
  const { userEmail, password, guestCart } = req.body;
  try {
    const check = await getUserByUserEmail(userEmail);
    if (check.length && !check[0].isGuest) {
      next({
        name: "Registration Error",
        message: `An account using ${userEmail} already exists.`,
      });
    } else if (password.length < 8) {
      next({
        name: "Registration Error",
        message: "Passwords need to be at least 8 characters long.",
      });
    } else {
      let newUser;
      if (check.length && check[0].isGuest) {
        newUser = await guestToUser(userEmail, password);
      } else {
        newUser = await createUser({ userEmail, password });
      }
      const token = jwt.sign(
        {
          id: newUser.id,
          userEmail: newUser.userEmail,
          isAdmin: newUser.isAdmin,
        },
        process.env.JWT_SECRET
      );
      let order = [];
      if (guestCart.length) {
        order = await guestToRegisterCart(newUser.id, guestCart);
      }
      res.send({
        message: `New account created using ${userEmail}. Thanks for signing up!`,
        token,
        user: {
          id: newUser.id,
          userEmail: newUser.userEmail,
          isAdmin: newUser.isAdmin,
          order,
        },
      });
    }
  } catch (err) {
    next(err);
  }
});

// POST /api/users/login
router.post("/login", async (req, res, next) => {
  const { userEmail, password, guestCart } = req.body;
  try {
    const check = await getUserByUserEmail(userEmail);
    if (!check.length || check[0].isGuest) {
      next({
        name: "Authorization Error",
        message: `No accounts exist for user ${userEmail}. Please try again, or create an account.`,
      });
    } else if (!check[0].isActive) {
      res.status(403);
      next({
        name: "Account Forbidden",
        message: "This account has been deactivated.",
      });
    } else {
      const user = await checkUser(userEmail, password);
      if (!user) {
        next({
          name: "Authorization Error",
          message: "Incorrect password. Please try again.",
        });
      } else {
        const token = jwt.sign(
          {
            id: user[0].id,
            userEmail: user[0].userEmail,
            isAdmin: user[0].isAdmin,
          },
          process.env.JWT_SECRET
        );
        let cart = [];
        if (guestCart.length) {
          console.log("guestCart", guestCart);
          cart = await guestToLoginCart(user[0].id, guestCart);
          console.log("cart", cart);
        }
        res.send({
          message: `Welcome back, ${user[0].userEmail}. You're logged in!`,
          token,
          user: {
            id: user[0].id,
            userEmail: user[0].userEmail,
            isAdmin: user[0].isAdmin,
            cart,
          },
        });
      }
    }
  } catch (err) {
    next(err);
  }
});

// GET: /api/users/me
router.get("/me", async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    next({
      name: "Authorization Error",
      message: "You must be logged in to perform this action.",
    });
  } else {
    const { id: userId } = req.user;
    try {
      const user = await getUserProfileById(userId);
      res.send(user);
    } catch (err) {
      next(err);
    }
  }
});

router.patch("/:userId/update", async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    next({
      name: "Authorization Error",
      message: "You must be logged in to perform this action.",
    });
  } else {
    const { userId } = req.params;
    const { state, city, street, zip } = req.body;
    const data = { userId, state, city, street, zip };
    try {
      const newAddress = await editUserAddress(data);
      res.send(newAddress);
    } catch (err) {
      next(err);
    }
  }
});

// GET /api/users/me/cart
router.get("/me/cart", async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    next({
      name: "Authorization Error",
      message: "You must be logged in to perform this action.",
    });
  } else {
    const { id: userId } = req.user;
    try {
      const result = await getUserCartById(userId);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
});

// GET /api/users/me/wishlist
router.get("/me/wishlist", async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    next({
      name: "Authorization Error",
      message: "You must be logged in to perform this action.",
    });
  } else {
    const { id: userId } = req.user;
    try {
      const result = await getUserWishlist(userId);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
});

// POST /api/users/me/wishlist
router.post("/me/wishlist", async (req, res, next) => {
  const { userId, bookId } = req.body;
  try {
    const result = await postItemToWishlist(userId, bookId);
    if (result.length) {
      res.send({
        name: "Wishlist Updated",
        message: "Item added to wishlist.",
        result,
      });
    } else {
      next({
        name: "Wishlist Not Updated",
        message: "An unknown error occurred. Please try again.",
      });
    }
  } catch (err) {
    next(err);
  }
});

// DELETE /api/users/me/wishlist
router.delete("/me/wishlist", async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    next({
      name: "Authorization Error",
      message: "You must be logged in to perform this action.",
    });
  } else {
    const { wishlistId } = req.body;
    console.log("id", wishlistId);
    try {
      const result = await deleteBookFromWishlist(wishlistId);
      if (result.length) {
        res.send({
          name: "Wishlist Updated",
          message: "Item deleted successfully from your wishlist.",
          result,
        });
      } else {
        next({
          name: "Wishlist Not Updated",
          message: "An unknown error occurred. Please try again.",
        });
      }
    } catch (err) {
      next(err);
    }
  }
});

module.exports = router;
