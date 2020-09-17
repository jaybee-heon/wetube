const express = require("express");
const app = express();
const PORT = 3000;

function handleListening() {
  console.log(`Example app listening at http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
