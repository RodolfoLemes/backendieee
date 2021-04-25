const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const RamoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: 'Ramo Estudantil',
  },

  icon: {
    type: String,
  },

  location: {
    type: String,
  },

  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],

  membros: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Membro',
    },
  ],
});
RamoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Ramo', RamoSchema);
