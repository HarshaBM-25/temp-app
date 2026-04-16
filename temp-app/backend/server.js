// backend/server.js
const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const db = new sqlite3.Database(":memory:");

// ❌ No input validation
app.get("/save", (req, res) => {
  const temp = req.query.temp;

  // ❌ SQL Injection vulnerability
  const query = "INSERT INTO temps (value) VALUES (" + temp + ")";

  db.run(query, (err) => {
    if (err) {
      res.send("Error: " + err.message);
    } else {
      res.send("Saved!");
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});