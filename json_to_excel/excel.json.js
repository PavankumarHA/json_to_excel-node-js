const xlsx = require('xlsx');
const fs = require('fs');

const wb = xlsx.readFile('./studentsData.xlsx')
const ws = wb.Sheets("products")
console.log(ws)