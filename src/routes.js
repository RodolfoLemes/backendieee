const express = require('express');
const axios = require('axios');
require('dotenv').config();
const routes = express.Router();

const PostController = require('./controllers/PostController');
const RamoController = require('./controllers/RamoController');
const MembroController = require('./controllers/MembroController');
const transporter = require('./config/mailer');

function isEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Auth SITE
routes.post('/auth', (req, res) => {
  const { login, password } = req.body;

  if (login === process.env.ADMIN && password === process.env.PASSWORD) {
    return res.send(true);
  } else {
    return res.send(false);
  }
});

// Feed
routes.get('/feed', PostController.getPosts);
routes.post('/post', PostController.create);
routes.delete('/post', PostController.delete);

// Ramo
routes.post('/ramo', RamoController.create);
routes.get('/ramo', RamoController.getRamos);
routes.get('/ramo/:ramoId', RamoController.get);

// Membro
routes.post('/membro', MembroController.createAdmin);

// Init
routes.get('', (req, res) => {
  return res.send('bubelezanda');
});

// Contact
routes.post('/contact', async (req, res) => {
  const { email, msg } = req.body;

  if (email !== '' && msg !== '') {
    if (isEmail(email)) {
      try {
        let info = await transporter.sendMail({
          from: 'ieeeuem@gmail.com', // sender address
          to: 'rodolfo_fero@hotmail.com', // list of receivers
          subject: 'contato de ' + email, // Subject line
          text: msg, // plain text body
        });
        if (info) {
          console.log('TORBA');
        }
      } catch (err) {
        console.log(err);
        return res.send(false);
      }
    } else {
      return res.send(false);
    }
  }

  return res.send(true);
});

const secret = '6LeOI6sZAAAAAHCOjAJEeWTtW_yDLHjliMWS22pA';
// reCaptcha
routes.post('/reCaptcha', async (req, res) => {
  const { response } = req.body;

  const google = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&&response=${response}`,
    null,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  return res.send(google.data);
});

module.exports = routes;
