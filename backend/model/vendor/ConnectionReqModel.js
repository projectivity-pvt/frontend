const mongoose = require('mongoose')

const connectionReqSchema = mongoose.Schema(
  {
    name: { type: String },
    connect: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const ConnectionReq = mongoose.model('ConnectionReq', connectionReqSchema );
module.exports = ConnectionReq;    