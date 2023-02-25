const mongoose = require('mongoose')

const invoiceCorrectSchema = mongoose.Schema(
  {
    invoiceId: {type: String},
    description: { type: String },
    date: { type: Date },
  },
  { timestamps: true }
)

const InvoiceCorrect = mongoose.model('InvoiceCorrect', invoiceCorrectSchema)
module.exports = InvoiceCorrect
