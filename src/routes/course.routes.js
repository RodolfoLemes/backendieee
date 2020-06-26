const express = require('express')
const routes = express.Router()
const CourseController = require('../controllers/CourseController')

routes.post('/create', CourseController.create)

module.exports = routes