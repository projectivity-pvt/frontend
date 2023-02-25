const mongoose = require('mongoose')

const quotationSchema = mongoose.Schema(
  {
    name: { type: String },
    category: { type: String },
    customCategory: { type: Number },
    closingDate: { type: Date },
    total: { type: Number },
    description: { type: String },
    attachment: { type: String },
  },
  { timestamps: true }
)

const Quotation = mongoose.model('Quotation', quotationSchema)
module.exports = Quotation
