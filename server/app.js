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

app.use("/api/author", require("./routes/author.route"));
app.use("/api/illustrator", require("./routes/illustrator.route"));
app.use("/api/label", require("./routes/label.route"));
app.use("/api/novel", require("./routes/novel.route"));
app.use("/api/release", require("./routes/release.route"));

module.exports = app;
