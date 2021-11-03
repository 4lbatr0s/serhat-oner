const Post = require('../models/Post') 
const fs = require('fs') 

//get all  blog post summaries on the index page.
exports.getAllPosts = async (req, res) => {

    const page = req.query.page || 1 //if there is no given query value, it is 1.
    const postsPerPage = 2; //show 2 posts per page.
    const totalPosts = await Post.find().countDocuments(); //return the number of all saved documents in the mongo db


    const posts = await Post.find({}) 
    .sort('-dateCreated')
    .skip((page-1) * postsPerPage) //pass the former posts. ex: page = 2 -> skip 2-1*2 = 2 pass first 2 photos therefore first page.
    .limit(postsPerPage)
     console.log(totalPosts)

     res.render("index", {
      posts:posts,
      current:page,
      pages:Math.ceil((totalPosts/postsPerPage)) //create pages.
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