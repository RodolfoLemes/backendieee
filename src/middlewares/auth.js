const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.body.token

    if(!authHeader) 
        return res.status(401).send({ error: 'No token provided'})

    const parts = authHeader.split(' ')

    if(!parts.lenght === 2)
        return res.status(401).send({ error: 'token error' })

    const [ scheme, token ] = parts

    if(!/^Bearer$/i.test(scheme)) 
        return res.status(401).send({ error: 'Token Malformatted' })

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token invalid' })

        req.userId = decoded.id
        return next()
    })
}