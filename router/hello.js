const express = require("express");
const path = require("path");

const hello = express.Router();

hello.get("/", (req, res) => {
  console.log("Hello world!");
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = hello;
