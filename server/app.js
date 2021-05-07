require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");
const app = express();

app.use(
  cors({ origin: "*" }),
  express.json(),
  express.urlencoded({
    extended: true,
  }),
  helmet()
);

app.use("/novel", require("./routes/novel.route"));

module.exports = app;
