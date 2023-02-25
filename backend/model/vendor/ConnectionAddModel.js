const mongoose = require('mongoose')

const connectionAddSchema = mongoose.Schema(
  {
    name: { type: String },
    connect: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const ConnectionAdd = mongoose.model('ConnectionAdd', connectionAddSchema );
module.exports = ConnectionAdd;    