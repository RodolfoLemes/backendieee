const Event = require('../models/Event')

module.exports = {
  async getList(req, res) {
    const { sort = 1, filter, range } = req.query

    if(filter) {
      const date = JSON.parse(filter).date
      const year = new Date(date).getFullYear()
      const month = new Date(date).getMonth() + 1
      const gte = `${year.toString()}-${month.toString()}-01`
      const lt = `${year.toString()}-${month.toString()}-31`
      var events = await Event.find({ date: {$gte: gte, $lt: lt} }).sort({ date: 1 })
    } else {
      var events = await Event.find().sort({ date: 1 })
    }

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
  },

  async createMany(req, res) {
    const events = req.body

    events.map(async element => await Event.create(element))

    return res.send(true)
  }
}