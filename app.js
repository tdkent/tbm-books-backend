require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Stripe Route
app.post("/create-checkout-session", async (req, res) => {
  const { userId, orderPrice } = req.body;
  const amount = Math.round(orderPrice * 100);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Fake Order",
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    // Enable for front end testing
    // success_url: `http://localhost:3000/${userId}/cart?success=true`,
    // cancel_url: `http://localhost:3000/${userId}/cart?canceled=true`,
    // Enable for Tim's local testing
    success_url: `http://localhost:3000/guest?success=true`,
    cancel_url: `http://localhost:3000/guest?canceled=true`,
  });
  res.json({ url: session.url });
});

// API Routes
const apiRouter = require("./api");
app.use("/api", apiRouter);

apiRouter.use("/unknown", (req, res) => {
  res.status(404).send({ message: "404 Page Not Found!" });
});

apiRouter.use((error, req, res, next) => {
  if (res.status < 400) {
    res.status(500);
  }
  res.send({
    error: "There was an error!",
    name: error.name,
    message: error.message,
  });
});

module.exports = app;
