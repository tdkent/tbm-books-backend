require("dotenv").config();
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const apiRouter = require('./api');

app.use('/api', apiRouter);

apiRouter.use("/unknown", (req, res) => {
  res.status(404).send( {message: "404 Page Not Found!"});
})

apiRouter.use((error, req, res, next) => {
  if (res.status < 400) {
    res.status(500);
  }
  res.send({
    error: 'There was an error!',
    name: error.name, 
    message: error.message,
  });
});

module.exports = app;