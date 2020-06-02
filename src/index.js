const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')

const routes = require('./routes')
const projectRoutes = require('./routes/project.routes')
const memberRoutes = require('./routes/member.routes')
const doneRoutes = require('./routes/done.routes')
const eventRoutes = require('./routes/event.routes')

const app = express()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(express.json())
app.use('/api', routes)
app.use('/member', memberRoutes)
app.use('/project', projectRoutes)
app.use('/done', doneRoutes)
app.use('/event', eventRoutes)

app.listen(process.env.PORT || 3333)