const express = require('express')
const routes = express.Router()

const PostController = require('./controllers/PostController')
const RamoController = require('./controllers/RamoController')
const MembroController = require('./controllers/MembroController')

// Feed
routes.get('/feed', PostController.getPosts)
routes.post('/post', PostController.create)
routes.delete('/post', PostController.delete)

// Ramo
routes.post('/ramo', RamoController.create)

// Membro
routes.post('/membro', MembroController.createAdmin)

// Init
routes.get('', (req, res) => {
    return res.send('bubelezanda')
})

module.exports = routes