// backend/db.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

db.run("CREATE TABLE temps (value INTEGER)");

module.exports = db;