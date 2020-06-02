const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Event = new Schema({
  description: {
    type: String,
  },

  date: {
    type: Date
  },

  chapter: {
    type: String
  }
})

module.exports = mongoose.model('Event', Event)