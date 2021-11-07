const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/api/numbers", (req, res) => {
  res.send([1, 2, 3]);
});

server.use((err, req, res, next) => {
  // eslint-disable-line

  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
