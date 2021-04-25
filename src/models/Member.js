const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Member = new Schema({
  email: String,

  name: String,

  img: String,

  chapter: String,

  age: Number,

  special: {
    type: Boolean,
    default: false,
  },

  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project',
    },
  ],
});

module.exports = mongoose.model('Member', Member);
