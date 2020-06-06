const express = require('express')
const routes = express.Router()

const MemberController = require('../controllers/MemberController')

routes.get('/', MemberController.getList)
routes.get('/:memberId', MemberController.getOne)
routes.post('/', MemberController.create)
routes.post('/many', MemberController.createMany)

module.exports = routes