const express = require('express')
const routes = express.Router()

const EventController = require('../controllers/EventController')

routes.get('/', EventController.getList)
routes.get('/:eventId', EventController.getOne)
routes.post('/', EventController.create)

module.exports = routes