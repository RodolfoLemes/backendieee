const mongoose = require('mongoose')

const RamoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        default: 'Ramo Estudantil'
    },

    icon: {
        type: String
    },

    location: {
        type: String
    },

    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }],

    membros: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Membro',
    }],
})

module.exports = mongoose.model('Ramo', RamoSchema)