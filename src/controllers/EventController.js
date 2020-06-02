const Event = require('../models/Event')

module.exports = {
  async getList(req, res) {
    const { sort, filter, range } = req.query

    const events = await Event.find()

    return res.send(events)
  },

  async getOne(req, res) {
    const { eventId } = req.params

    const event = await Event.findById(eventId)

    return res.send(event)
  },

  async create(req, res) {
    const event = req.body

    const newEvent = await Event.create(event)

    return res.send(newEvent)
  }
}