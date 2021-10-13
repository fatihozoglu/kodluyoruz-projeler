const fs = require("fs");

fs.writeFile("employees.json", '{"name": "Employee 2 Name", "salary": 5000}', 'utf8', err => {
    if(err) console.log(err);
})