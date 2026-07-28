const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "10.0.1.113",
  user: "recipeuser",
  password: "Uday@2203",
  database: "recipes"
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MariaDB");
});

module.exports = connection;
