const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const db = new sqlite3.Database(":memory:");
const port = 3000;

db.serialize();
app.get();
app.listen(port, () => {
  console.log(`System is running on port ${port}`);
});
