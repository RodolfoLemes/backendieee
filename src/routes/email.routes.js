const express = require('express');
const routes = express.Router();
const multer = require('multer');

const upload = multer();
const EmailController = require('../controllers/EmailController');

routes.post('/sendEmail', upload.any(), EmailController.sendEmail);

module.exports = routes;
