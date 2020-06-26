const express = require('express')
const routes = express.Router()

const PostController = require('./controllers/PostController')
const RamoController = require('./controllers/RamoController')
const MembroController = require('./controllers/MembroController')
const transporter = require('./config/mailer')

function isEmail(email) {
	var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Feed
routes.get('/feed', PostController.getPosts)
routes.post('/post', PostController.create)
routes.delete('/post', PostController.delete)

// Ramo
routes.post('/ramo', RamoController.create)
routes.get('/ramo', RamoController.getRamos)
routes.get('/ramo/:ramoId', RamoController.get)

// Membro
routes.post('/membro', MembroController.createAdmin)

// Init
routes.get('', (req, res) => {
    return res.send('bubelezanda')
})

// Contact
routes.post('/contact', async (req, res) => {
    const { email, msg } = req.body
    
    if(email !== '' && msg !== '') {
        if(isEmail(email)) {
            try {
                let info = await transporter.sendMail({
                    from: 'ieeeuem@gmail.com', // sender address
                    to: 'rodolfo_fero@hotmail.com', // list of receivers
                    subject: 'contato de ' + email, // Subject line
                    text: msg, // plain text body
                })
                if(info) {
                    console.log("TORBA")
                }
            } catch(err) {
                console.log(err)
                return res.send(false)
            }
        } else {
            return res.send(false)
        }
    }

    return res.send(true)
})
module.exports = routes