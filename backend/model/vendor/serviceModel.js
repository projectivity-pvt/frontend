const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema(
  {
    name: { type: String },
    priceRange: { type: Number },
    description: { type: String },
    type: { type: String },
    department: { type: String },
  },
  { timestamps: true }
)

const Service = mongoose.model('Service', serviceSchema );
module.exports = Service;