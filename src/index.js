const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//const routes = require('./routes')
//const routeAuth = require('./routeAuth')
require('dotenv').config()

const app = express()

//mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

app.use(cors())
app.use(express.json())
//app.use(routeAuth)
//app.use(routes)

app.listen(process.env.PORT || 3333)