const mysql = require("mysql");
const fastcsv = require("fast-csv");
const fs = require("fs");
const ws = fs.createWriteStream("students.csv");

const connection = mysql.createConnection({     // Create a connection to the database
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee"
});
connection.connect(error => {           // open the MySQL connection

  if (error) throw error;

  connection.query("SELECT * FROM students", function(error, data, fields) {     // query data from MySQL
    if (error) throw error;
    const jsonData = JSON.parse(JSON.stringify(data));
    console.log("jsonData", jsonData);
    fastcsv
      .write(jsonData, { headers: true })
      .on("finish", function() {
        console.log("Write to student.csv successfully!");
      })
      .pipe(ws);
  });
});