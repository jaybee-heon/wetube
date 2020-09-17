const express = require("express");
const app = express();
const PORT = 3000;

function handleListening() {
  console.log(`Example app listening at http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello from Home!");
}

function handleProfile(req, res) {
  res.send("You are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
