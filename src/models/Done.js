const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Done = new Schema({
  title: String,

  description: {
    type: String,
  },

  date: {
    type: Date
  }
})

module.exports = mongoose.model('Done', Done)