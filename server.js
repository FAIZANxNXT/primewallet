const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

// ⭐ IMPORTANT (ye line add karo)
app.use(express.static(__dirname));

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

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
