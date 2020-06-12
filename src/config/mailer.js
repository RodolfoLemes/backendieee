const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  host: 'in-v3.mailjet.com',
  port: 587,
  secure: false,
  auth: {
    user: '71393f0a95e9650f081ae54e27ddec2b',
    pass: '6aada5205ea5e732e9946aee27409201'
  }
})

module.exports = transporter