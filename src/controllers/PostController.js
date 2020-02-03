const Post = require('../models/Post')
const Ramo = require('../models/Ramo')
const Membro = require('../models/Membro')

module.exports = {
    async create(req, res) {
        try {
            const { userId, description, image, ramoId } = req.body

            const user = await Membro.findById(userId)
            if(!user.officer) return res.send('Não permitido!')

            const post = await Post.create({
                description,
                image,
                ramo: ramoId,
                author: user.name
            })

            const ramo = await Ramo.findById(ramoId)
            ramo.posts.push(post._id)
            await ramo.save()

            return res.send({ sucess: true, post })
        } catch (error) {
            return res.send({ error })
        }
    },

    async getPosts(req, res) {
        try {
            const { page = 1 } = req.query

            const posts = await Post.paginate({ }, {
                page,
                sort: { createAt: -1 },
                populate: { 
                    path: 'ramo', 
                    select: ['name', 'icon', 'location']
                },
                limit: 10
            })

            return res.send({ posts })
        } catch (error) {
            return res.send({ error })
        }
    },

    async delete(req, res) { // Deletar do cloudinary
        try {
            const { _id } = req.body
            
            const user = await Membro.findById(req.userId)
            if(!user.officer) return res.send('Não permitido!')

            const post = await Post.findByIdAndDelete(_id)

            return res.send({ sucess: true, post })
        } catch (error) {
            return res.send({ error })
        }
    }
}