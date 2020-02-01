const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

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
PostSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Post', PostSchema)