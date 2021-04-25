const transporter = require('../config/mailer');
//const fs = require('fs')

function isEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

module.exports = {
  async sendEmail(req, res) {
    const { to, subject, text } = req.body;
    const { files } = req;

    const realTo = to.filter(element => isEmail(element));
    if (files) {
      try {
        let info = await transporter.sendEmail({
          from: 'ieeeuem@gmail.com', // sender address
          to: realTo, // list of receivers
          subject, // Subject line
          text, // plain text body,
          attachments: [
            {
              // binary buffer as an attachment
              filename: files.originalname,
              content: files.buffer,
            },
          ],
        });
        if (info) {
          console.log(info);
          return res.send(true);
        }
      } catch (error) {
        console.log(error);
        return res.send(false);
      }
    } else {
      try {
        let info = await transporter.sendEmail({
          from: 'ieeeuem@gmail.com', // sender address
          to: realTo, // list of receivers
          subject, // Subject line
          text, // plain text body,
        });
        if (info) {
          console.log(info);
          return res.send(true);
        }
      } catch (error) {
        console.log(error);
        return res.send(false);
      }
    }
  },
};
