const Ramo = require('../models/Ramo')
const Membro = require('../models/Membro')

module.exports = {
    async create(req, res) {
        try {
            const { userId, name, description, icon, location, membro } = req.body

            const user = await Membro.findById(userId)
            if(!user.admin) return res.send('Não permitido')

            const ramo = await Ramo.create({
                name,
                description,
                icon,
                location
            })
            const membroDir = await Membro.create({
                name: membro.name,
                avatar: membro.avatar,
                officer: true,
                ramo: ramo._id
            })

            ramo.membros.push(membroDir._id)
            await ramo.save()

            return res.send({ sucess: true, ramo })
        } catch (error) {
            return res.send({ error })
        }
    }
}