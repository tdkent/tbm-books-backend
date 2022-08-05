const express = require("express");
const router = express.Router();

const {
  getUsersPaginated,
  getTotalUsersCount,
  deactivateUser,
  promoteUser,
  getTotalOrdersCount,
  getOrdersPaginated,
  getOrdersClosed,
  getBooksPaginated,
  createNewBook,
  deactivateBook,
  editBook,
  getTotalProductsCount,
  getOrdersOpen,
} = require("../db");

// USERS
// GET /api/admin/users
router.get("/users", async (req, res, next) => {
  try {
    const result = await getTotalUsersCount();
    res.send(result);
  } catch (err) {
    console.error("An error occurred:", err);
  }
});

// GET /api/admin/users/:currentPage
router.get("/users/:currentPage", async (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    const { currentPage } = req.params;
    try {
      const result = await getUsersPaginated(currentPage);
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
// GET /api/admin/orders
router.get("/orders", async (req, res, next) => {
  try {
    const result = await getTotalOrdersCount();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

// GET /api/admin/orders/:currentPage
router.get("/orders/:currentPage", async (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    const { currentPage } = req.params;
    try {
      const result = await getOrdersPaginated(currentPage);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
})

// GET /api/admin/orders/closed/:currentPage
router.get("/orders/closed/:currentPage", async(req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    const { currentPage } = req.params;
    try {
      const result = await getOrdersClosed(currentPage);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
})

// GET /api/admin/orders/open/:currentPage
router.get("/orders/open/:currentPage", async(req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    const { currentPage } = req.params;
    try {
      const result = await getOrdersOpen(currentPage);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
})

// PRODUCTS
// GET /api/admin/books/:currentPage
router.get("/books/:currentPage", async (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    const { currentPage } = req.params;
    try {
      const result = await getBooksPaginated(currentPage);
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
});

//GET /api/admin/books
router.get("/books", async (req, res, next) => {
  try {
    const result = await getTotalProductsCount();
    res.send(result);
  } catch (err) {
    next(err);
  }
});

// POST /api/admin/books/new
router.post("/books/add", async (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    try {
      const {
        isbn,
        title,
        author,
        year,
        publisher,
        imageLink,
        genre,
        description,
        price,
        inventory,
      } = req.body;
      const result = await createNewBook(
        isbn,
        title,
        author,
        year,
        publisher,
        imageLink,
        genre,
        description,
        price,
        inventory
      );
      res.send(result);
    } catch (err) {
      next(err);
    }
  }
});

// PATCH /api/admin/books/:bookId
router.patch("/books/:bookId", async (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    const { bookId } = req.params;
    const {
      isbn,
      title,
      author,
      year,
      publisher,
      imageLink,
      genre,
      description,
      price,
      inventory,
    } = req.body;
    try {
      const data = {
        bookId,
        isbn,
        title,
        author,
        year,
        publisher,
        imageLink,
        genre,
        description,
        price,
        inventory,
      };
      const result = await editBook(data);
      if (result.length) {
        res.send({
          name: "Update Successful",
          message: `Book ID# ${bookId} has been updated.`,
          book: result,
        });
      } else {
        next({
          name: "Update Unsuccessful",
          message: `Unable to update book ID# ${bookId}. Please try again.`,
        });
      }
    } catch (err) {
      next(err);
    }
  }
});

// DELETE /api/admin/books/:bookId
router.delete("/books/:bookId", async (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    res.status(403);
    next({
      name: "Access Forbidden",
      message: "You are not authorized to view this content.",
    });
  } else {
    const { bookId } = req.params;
    try {
      const result = await deactivateBook(bookId);
      if (result.length) {
        res.send({
          name: "Deactivation Successful",
          message: `Book ID# ${bookId} has been deactivated.`,
        });
      } else {
        next({
          name: "Deactivation Unsuccessful",
          message: `Unable to deactivate book ID# ${bookId}. Please try again.`,
        });
      }
    } catch (err) {
      next(err);
    }
  }
});

module.exports = router;
