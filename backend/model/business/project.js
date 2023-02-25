const mongoose = require('mongoose')

const projectSchema = mongoose.Schema(
  {
    projectName: { type: String },
    description: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    projectBudget: { type: Number },
    location: { type: String },
    address: { type: String },
  },
  { timestamps: true }
)

const Project = mongoose.model('Project', projectSchema );
module.exports = Project;