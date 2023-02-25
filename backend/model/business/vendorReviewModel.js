const mongoose = require('mongoose')

const vendorReviewSchema = mongoose.Schema(
  {
    serviceRating: {type: Number},
    serviceDesc: {type: String},
    payRating: {type: Number},
    recommendRating: {type: Number},
    recommendDesc: {type: String},
  },
  { timestamps: true }
)

const VendorReview = mongoose.model('VendorReview', vendorReviewSchema)
module.exports = VendorReview
