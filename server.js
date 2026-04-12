const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Register page
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));
});

// Login page
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

// Register
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.send("Registered Successfully ✅");
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  res.send("Login Working ✅");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
