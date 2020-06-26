const express = require('express')
const routes = express.Router()
const multer = require('multer')

const upload = multer()
const CourseController = require('../controllers/CourseController')

routes.post('/create', upload.any(), CourseController.create)

module.exports = routes