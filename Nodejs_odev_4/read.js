const fs = require("fs");

fs.readFile("employees.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
})