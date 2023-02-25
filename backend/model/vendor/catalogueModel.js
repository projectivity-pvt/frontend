const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const catalogueSchema = mongoose.Schema(
  {
    // service:{ type: ObjectId, ref: "Service", required: true },
    name: { type: String },
    quantity: { type: Number },
    model_no: { type: String },
    rate: { type: Number },
    description: { type: String },
    rate_for: { type: String },
    attachment: { type: String },
  },
  { timestamps: true }
)

const Catalogue = mongoose.model('Catalogue', catalogueSchema );
module.exports = Catalogue;