require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const app = express();

app.use(morgan("dev"));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.BACKEND_URL],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Stripe Route
app.post("/create-checkout-session", async (req, res) => {
  const { orderPrice, orderId, userId } = req.body;
  const amount = Math.round(orderPrice * 100);
  let success_url;
  let cancel_url;
  if (userId) {
    success_url = `${process.env.FRONTEND_URL}/${userId}/cart?success=true${orderId}`;
    cancel_url = `${process.env.FRONTEND_URL}/${userId}/cart?canceled=true`;
  } else {
    success_url = `${process.env.FRONTEND_URL}/GuestCart?success=true${orderId}`;
    cancel_url = `${process.env.FRONTEND_URL}/GuestCart?canceled=true${orderId}`;
  }
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
    success_url,
    cancel_url,
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
const PORT = process.env["PORT"] ?? 4000;

const client = require("./client");

app.listen(PORT, () => {
  console.log(`CORS-enabled server listening on port ${PORT}`);
});

client.connect();

module.exports = app;
