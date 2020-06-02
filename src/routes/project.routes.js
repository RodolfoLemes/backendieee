const express = require('express')
const routes = express.Router()

const ProjectController = require('../controllers/ProjectController')

routes.get('/', ProjectController.getList)
routes.get('/:projectId', ProjectController.getOne)
routes.post('/', ProjectController.create)
routes.post('/many', ProjectController.createMany)

module.exports = routes