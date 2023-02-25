const mongoose = require('mongoose')

const catalogueDocSchema = mongoose.Schema(
  {
    name: { type: String },
    valid_till: { type: Date },
    attachment: { type: String },
  },
  { timestamps: true }
)

const CatalogueDoc = mongoose.model('CatalogueDoc', catalogueDocSchema );
module.exports = CatalogueDoc;