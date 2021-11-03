const Post = require('../models/Post') 
const fs = require('fs')

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getAddPostPage = (req, res) => {
  res.render("add_post");
};

exports.getEditPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id }); //post equals the requested post with the same id.
  res.render("edit", {
    post,
  });
};
