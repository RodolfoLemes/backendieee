const express = require('express')
const routes = express.Router()

const DoneController = require('../controllers/DoneController')

routes.get('/', DoneController.getList)
routes.get('/:doneId', DoneController.getOne)
routes.post('/', DoneController.create)

module.exports = routes