const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    file: { type: String },
    likes: { type: Number },
    comments: { type: String },
  },
  { timestamps: true }
)

const Post = mongoose.model('Post', postSchema );
module.exports = Post;