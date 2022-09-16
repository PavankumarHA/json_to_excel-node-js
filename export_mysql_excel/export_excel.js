const mysql = require("mysql"),
      xlsx = require("xlsx");

const db = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "password",
  database: "employee"
});
db.connect();

db.query("SELECT * FROM `students`", (error, results) => {    // EXPORT TO EXCEL

  if (error) throw error;         //  EXTRACT DATA FROM DATABASE
  var data = [];
  results.forEach((row) => {
    data.push([row["stu_name"], row["stu_age"], row["token"]]);
  });

  var worksheet = xlsx.utils.aoa_to_sheet(data),
  workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "students");
  xlsx.writeFile(workbook, "students.xlsx");
});
db.end();
