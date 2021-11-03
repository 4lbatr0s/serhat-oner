const mongoose = require("mongoose");
const Schema = mongoose.Schema; //sablon

const PostSchema = new Schema({
  title: String,
  context: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);


module.exports = Post;