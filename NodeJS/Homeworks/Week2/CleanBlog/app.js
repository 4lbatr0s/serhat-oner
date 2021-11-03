const express = require("express"); //import express
const mongoose = require("mongoose"); //mongoose import.
const fileUpload = require("express-fileupload"); //3rd party module.
const methodOverride = require("method-override");
const ejs = require("ejs"); //import ejs
const postController = require("./controllers/postControllers");
const pageController = require("./controllers/pageController");
const app = express(); //express türden bir server instance

// connect db
mongoose.connect("mongodb://localhost/clean-blog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//MIDDLEWARE
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"], //methods that will be overriden
  })
);
app.use(fileUpload()); //to use fileUpload module.
app.use(express.json()); //to send json files.
app.use(express.static("public")); //in order display static files in the web browser.
app.use(function (req, res, next) {
  console.log("Request:", req.path); //console.log the next request.
  next(); //execute the next request at the moment middleware requirements completed, in this case console.log:req.path
});

app.set("view engine", "ejs"); //tells the browser what view engine we are going to use.

//routes
app.get("/", postController.getAllPosts); //get all posts.
app.get('/posts/:id', postController.getPost);; //get individual blog posts.
app.post("/posts", postController.createPost); //create a new post.
app.put("/posts/:id", postController.updatePost); //update an individual blog post.
app.delete("/posts/:id", postController.deletePost); //delete photo
app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPostPage);
app.get("/posts/edit/:id", pageController.getEditPage);


const port = 3000;

app.listen(port, () => {
  console.log("App works on port:", port);
});
