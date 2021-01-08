const express = require("express");

// Enable middleware CORS
const cors = require("cors");
// path modules provides utilities for working with file and directory path
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("*", (req, res) => {
  app.use(express.static(path.join(__dirname, "/client/build")));
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});