const express = require('express');
const routes = express.Router();

const EventController = require('../controllers/EventController');

routes.get('/', EventController.getList);
routes.get('/:eventId', EventController.getOne);
routes.delete('/:eventId', EventController.delete);
routes.post('/', EventController.create);
routes.post('/many', EventController.createMany);

module.exports = routes;
