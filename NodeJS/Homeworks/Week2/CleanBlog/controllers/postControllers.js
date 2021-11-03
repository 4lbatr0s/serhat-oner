const Post = require('../models/Post') 
const fs = require('fs') 

//get all  blog post summaries on the index page.
exports.getAllPosts = async (req, res) => {
    const posts = await Post.find({}); //wait until index page renders the posts.
    res.render("index", {
      posts,
    });
  };


  //get individual blog post page.
exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {
      post,
    });
  };

 //create a new post
 exports.createPost = async (req, res) => {
    //async - await'll be used.
    console.log(req.body);  //req.files => info about uploaded files.
    await Post.create(req.body); // thanks to the Post model, we are turning our request body into a database document.
    res.redirect("/");
}

//update an individual blog post.
exports.updatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.context = req.body.context;
    post.save();
  
    res.redirect(`/posts/${req.params.id}`);
  }

  //delete photo
  //override: post->delete
exports.deletePost = async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect('/');
  }