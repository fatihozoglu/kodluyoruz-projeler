const express = require("express");
const ejs = require("ejs");

const app = express();

// Setting ejs as a view engine
app.set("view engine", "ejs");
// Using express.static middleware for our static files to be served from public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.listen(8080, () => {
  console.log("Sunucu 8080 Portunda başlatıldı.");
});
