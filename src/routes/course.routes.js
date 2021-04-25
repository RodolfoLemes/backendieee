const express = require('express');
const routes = express.Router();
const CourseController = require('../controllers/CourseController');

routes.get('/', CourseController.getList);
routes.get('/:courseId', CourseController.getOne);
routes.post('/create', CourseController.create);

module.exports = routes;
