const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("./db");

// mySQL password masking
dotenv.config({ path: ".process.env" });
//Server
const server = express();

// Connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//Default route
server.get("/api", function (req, res) {
  res.send({
    message: "Default route",
  });
});

// Sign In data
server.post("/api/signin", (req, res) => {
  let data = req.body;
  let sql = "SELECT * FROM patients WHERE email = ?";
  let query = db.query(sql, [data.Email], (err, results) => {
    if (err) throw err;
    if (results) {
      //Check if password is correct
      bcrypt.compare(data.Password, results[0].password, (error, response) => {
        console.log(response);
        if (response) {
          console.log("Angemeldet");
        } else {
          console.log("Passwort ist falsch");
        }
      });
    } else {
      console.log("Sie haben noch kein Konto");
    }
  });
});

//Send Sign Up data
server.post("/api/signup", async (req, res) => {
  let data = req.body;
  //Hash password
  hash = await bcrypt.hash(data.Password, 10);
  //Insert data into the database
  let sql =
    "INSERT INTO patients (`email`, `password`) VALUES ('" +
    data.Email +
    "', '" +
    hash +
    "')";

  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

//Listen in port 3000
server.listen(3000, (err) => {
  if (err) throw err;
  console.log("> Server is ready on http://localhost:3000");
});
