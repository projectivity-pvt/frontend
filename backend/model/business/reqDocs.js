const mongoose = require('mongoose')

const reqDocSchema = mongoose.Schema(
  {
    vendorName: {type: String},
    docName: {type: String},
    description: { type: String },
    status: { type: String },
  },
  { timestamps: true }
)

const ReqDoc = mongoose.model('ReqDoc', reqDocSchema)
module.exports = ReqDoc
