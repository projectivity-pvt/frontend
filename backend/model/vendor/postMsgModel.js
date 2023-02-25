const mongoose = require('mongoose')

const postMsgSchema = mongoose.Schema(
  {
    userImg: { type: String },
    name: { type: String },
    message: { type: String },
  },
  { timestamps: true }
)

const PostMsg = mongoose.model('PostMsg', postMsgSchema)
module.exports = PostMsg
