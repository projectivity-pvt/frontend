const mongoose = require('mongoose')

const registerSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    mobile: { type: Number },
    password: { type: String },
    type: { type: Boolean, default: false, },
  },
  { timestamps: true }
)

const Register = mongoose.model('Register', registerSchema );
module.exports = Register;