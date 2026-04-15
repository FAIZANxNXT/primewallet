const express = require("express");
const path = require("path");

const app = express();

// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Register
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

// Login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Test
app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "test.html"));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("Server running...");
});
