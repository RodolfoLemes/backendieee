const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: 'in-v3.mailjet.com',
  port: 587,
  secure: false,
  auth: {
    user: '1fae48628a3583b2779668b70782031d',
    pass: '9b9286b5afbfac7d446389f1772d45f2'
  }
})

module.exports = transporter