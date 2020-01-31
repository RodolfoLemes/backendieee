const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    ramo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ramo',
        required: true
    },

    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema)