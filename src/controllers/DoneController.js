const Done = require('../models/Done')

module.exports = {
  async getList(req, res) {
    const { sort, filter, range } = req.query

    const dones = await Done.find()

    return res.send(dones)
  },

  async getOne(req, res) {
    const { doneId } = req.params

    const done = await Done.findById(doneId)

    return res.send(done)
  },

  async create(req, res) {
    const done = req.body

    const newDone = await Done.create(done)

    return res.send(newDone)
  },

  async createMany(req, res) {
    const dones = req.body

    dones.map(async element => await Done.create(element))

    return res.send(true)
  }
}