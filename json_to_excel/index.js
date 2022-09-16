const XLSX = require('xlsx');

const students = [
    {name:"harish",email:"harish@gmail.com",ph_no:123456789},
    {name:"ramesh",email:"ramesh@gmail.com",ph_no:234567890},
    {name:"jeevan",email:"jeevan@gmail.com",ph_no:453242455}
]

const convertJsonToExcel=()=>{
    const workSheet = XLSX.utils.json_to_sheet(students);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "students")
    XLSX.write(workBook, { bookType: 'xlsx', type: "buffer"})
    XLSX.write(workBook, { bookType: "xlsx", type: "binary"})
    XLSX.writeFile(workBook, "studentsData.xlsx")
    
}

convertJsonToExcel()