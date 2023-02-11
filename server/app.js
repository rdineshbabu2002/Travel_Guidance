const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.options("*", cors());

app.all("*", (req, res, next) => {});

module.exports = app;
