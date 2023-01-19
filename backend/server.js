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
  let user = data.ID;
  let sql = "SELECT * FROM patients WHERE email = ?";
  let query = db.query(sql, [data.Email], (err, results) => {
    if (err) throw err;
    if (results) {
      //Check if password is correct
      bcrypt.compare(data.Password, results[0].password, (error, response) => {
        if (response) {
          console.log("Angemeldet");
        } else {
          console.log("Passwort ist falsch");
        }
      });
      let sqlid = "SELECT ID FROM patients WHERE email = ?";
      let queryid = db.query(sqlid, [data.Email], (err, results) => {
        if (err) throw err;
        if (results) {
          res.send(results);
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
  //console.log(data.Gender);

  //Hash password
  hash = await bcrypt.hash(data.Password, 10);

  //Generate key
  function makekey(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  //Set expiration date
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() - 1);
  tomorrow.setHours(tomorrow.getHours() + 1);
  //Convert Date to string
  let tomorrowstring = tomorrow.toISOString();

  //Extract date-time parts from string
  let year = tomorrowstring.substring(0, 4);
  let month = tomorrowstring.substring(5, 7);
  let day = tomorrowstring.substring(8, 10);
  let hour = tomorrowstring.substring(11, 13);
  let minute = tomorrowstring.substring(14, 16);
  let second = tomorrowstring.substring(17, 19);

  //Combine strings
  let expiration =
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;

  //Check if email is already registered
  let checkemail = "SELECT COUNT(*) AS cnt FROM patients WHERE email = ?";
  let qryemail = db.query(checkemail, [data.Email], (err, results) => {
    if (err) {
      throw err;
    } else {
      if (results[0].cnt > 0) {
        console.log("Sie haben schon ein Konto");
      } else {
        //Check if thepist is already assigned
        let checkID = "SELECT * FROM patients WHERE therapistID IS NULL";
        let qryID = db.query(checkID, [], (err, results) => {
          if (err) throw err;
          if (results) {
            //Insert data into the database
            let sql =
              "INSERT INTO patients (`email`, `password`, `name`, `prename`, `gender`, `birthdate`, `therapistAddKey`, `expirationDatekey`) VALUES ('" +
              data.Email +
              "', '" +
              hash +
              "', '" +
              data.Name +
              "', '" +
              data.Prename +
              "', '" +
              data.Gender +
              "', '" +
              data.Birthdate.substring(0, 10) +
              "', '" +
              makekey(14) +
              "', '" +
              expiration +
              "')";

            let query = db.query(sql, (err, results) => {
              if (err) throw err;
              res.send(results);
            });
          } else {
            console.log("Sie haben schon eine/n Therapeuten/in");
          }
        });
      }
    }
  });
});

server.post("/api/progress", async (req, res) => {
  let data = req.body;
  const todayDate = new Date();

  let count = {};

  let today = todayDate.toISOString();
  //Extract date-time parts from string
  let year = today.substring(0, 4);
  let month = today.substring(5, 7);
  let day = today.substring(8, 10);
  let hour = today.substring(11, 13);
  let minute = today.substring(14, 16);
  let second = today.substring(17, 19);

  //Combine strings
  let progressDate = year + "-" + month + "-" + day;
  // + " " + hour + ":" + minute + ":" + second;

  //Check if patient ID is already present
  let countID =
    "SELECT COUNT (*) AS cnt FROM `patient-progress` WHERE patientID = ?";
  let qrycountID = db.query(countID, [data.PatientID], (err, results) => {
    if (err) {
      throw err;
    } else {
      let Progress = data.ContentProgress;
      //Insert progress data if present
      if (results[0].cnt > 0) {
        // let sqlincr = "SELECT * FROM `patient-progress` WHERE patientID = ?";
        // let queryincr = db.query(sqlincr, [data.PatientID], (err, results) => {
        //   if (err) throw err;

        //   count[1] = [];
        //   count[1].push(Object.values(results[0])[1]);
        //   count[2] = [];
        //   count[2].push(Object.values(results[0])[2]);
        // });

        let uploadData =
          "UPDATE `patient-progress` SET `date" +
          Progress +
          "`= '" +
          progressDate +
          // (count[1] + 1) +
          // (count[2] + 1) +
          "', `upperCount`= `upperCount` + '1', `LowerCount`= `LowerCount` + '1'" +
          " WHERE `patient-progress`.`patientID` = " +
          data.PatientID;

        //console.log(progressDate);

        let query = db.query(uploadData, (err, results) => {
          if (err) throw err;
          res.send(results);
        });
      } else {
        //Insert new patient ID if not present
        // console.log(data.ContentProgress);
        let insertID =
          "INSERT INTO `patient-progress` (`patientID`, `date" +
          data.ContentProgress +
          "`, `upperCount`, `lowerCount`) VALUES ('" +
          data.PatientID +
          "', '" +
          progressDate +
          "', '" +
          "0" +
          "', '" +
          "0" +
          "')";
        // console.log("second");
        let qryinsertID = db.query(insertID, (err, results) => {
          if (err) throw err;
          res.send(results);
        });
      }
    }
  });
});

//Listen in port 3000
server.listen(3000, (err) => {
  if (err) throw err;
  console.log("> Server is ready on http://localhost:3000");
});
