const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema({
  title: String,

  description: {
    type: String,
    default: "Projeto do Ramo Estudantil Ramo IEEE UEM"
  },

  img: String,

  chapter: String,

  leader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
  },

  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member'
  }]
})

module.exports = mongoose.model('Project', Project)