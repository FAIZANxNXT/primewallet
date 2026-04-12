const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Fake database (temporary)
let users = [];

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

// Register system
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  users.push({
    username,
    password,
    balance: 0
  });

  res.send("Registered Successfully ✅ <br><a href='/login'>Login</a>");
});

// Login system
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.send(`Welcome ${user.username} 💰 Balance: ₹${user.balance}`);
  } else {
    res.send("Invalid Login ❌");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
