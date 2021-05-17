require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({ origin: "*" }),
  express.json(),
  express.urlencoded({
    extended: true,
  }),
);

app.use("/api/author", require("./routes/author.route"));
app.use("/api/illustrator", require("./routes/illustrator.route"));
app.use("/api/label", require("./routes/label.route"));
app.use("/api/novel", require("./routes/novel.route"));
app.use("/api/release", require("./routes/release.route"));


/**
 * Module dependencies.
 */
 var http = require("http");
 
 /**
  * Get port from environment and store in Express.
  */
 
 var port = normalizePort(process.env.PORT || "8090");
 app.set("port", port);
 
 /**
  * Create HTTP server.
  */
 
 var server = http.createServer(app);
 
 /**
  * Listen on provided port, on all network interfaces.
  */
 
 server.listen(port);
 
 /**
  * Normalize a port into a number, string, or false.
  */
 function normalizePort(val) {
   var port = parseInt(val, 10);
 
   if (isNaN(port)) {
     // named pipe
     return val;
   }
 
   if (port >= 0) {
     // port number
     return port;
   }
 
   return false;
 }
 