const express = require("express");
const Post = require("./models/Post");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB Database
mongoose.connect("mongodb://127.0.0.1:27017/clean-blog-db");

// Setting ejs as a view engine
app.set("view engine", "ejs");
// Using express.static middleware for our static files to be served from 'public' folder
app.use(express.static("public"));
// Using express.urlencoded middleware to encode the url data and parse it
app.use(express.urlencoded({ extended: true }));
// Using express.json() midlleware to get the data and parse it as json
app.use(express.json());

// Home Page
app.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.render("index", {
      posts,
    });
  } catch (err) {
    console.log(err.messsage);
  }
});

// About Page
app.get("/about", (req, res) => {
  res.render("about");
});

// Add Post Page
app.get("/add_post", (req, res) => {
  res.render("add_post");
});

// Individual Post Pages for each Blog Post
app.get("/posts/:id", async (req, res) => {
  try {
    const selectedPost = await Post.findById(req.params.id);
    res.render("post", {
      selectedPost,
    });
  } catch (err) {
    console.log(err.message);
  }
});

// Route for getting the data sent from Add Post Form
app.post("/add_post", async (req, res) => {
  try {
    await Post.create(req.body);
  } catch (err) {
    console.log(err.message);
  }
  res.redirect("/");
});

app.listen(8080, () => {
  console.log("Sunucu 8080 Portunda başlatıldı.");
});
