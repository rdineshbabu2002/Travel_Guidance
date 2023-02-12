const express = require("express");
const cors = require("cors");
const errorController = require("./controllers/errorController");
const AppError = require("./utils/AppError");

const app = express();
app.use(cors());
app.options("*", cors());

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(errorController);
module.exports = app;
