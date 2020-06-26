const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
  name: String,

  email: {
    type: String,
  },

  course: String,

  selection: {
    type: String
  },

  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Course', Course)