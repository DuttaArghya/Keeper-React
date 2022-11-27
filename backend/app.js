const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/keeperDB");

const notessSchema = new mongoose.Schema({
  note_title: String,
  note: String,
});

const Note = mongoose.model("Note", postsSchema);

app.get("/", function (req, res) {
  Post.find({}, function (err, posts) {
    res.render("home", {
      homeStartingContent: homeStartingContent,
      newPosts: posts,
    });
  });
});

app.get("/about", function (req, res) {
  res.render("about", { about: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contact: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});
app.post("/compose", (req, res) => {
  const post = new Post({
    note_title: req.body.postTitle,
    note: req.body.postBody,
  });
  post.save(function (err) {
    if (!err) {
      res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function (req, res) {
  const requested_postId = req.params.postId;

  Post.findOne({ _id: requested_postId }, function (err, post) {
    res.render("post", {
      title: post.note_title,
      content: post.note,
    });
  });
});

//Error 404 - Not Found Page to be added.

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
