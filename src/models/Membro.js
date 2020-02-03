const mongoose = require('mongoose')

const MembroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    avatar: {
        type: String
    },

    officer: {
        type: Boolean,
        default: false
    },

    admin: {
        type: Boolean,
        default: false
    },

    ramo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ramo',
    },
})

module.exports = mongoose.model('Membro', MembroSchema)