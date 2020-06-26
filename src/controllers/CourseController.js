const Course = require('../models/Course')
const transporter = require('../config/mailer')

module.exports = {
  async create(req, res) {
    const { courseName, name, email, select } = req.body
    
    try {
      const response = await Course.create({
        name,
        email,
        select,
        course: courseName
      })
      console.log(response)
      let info = await transporter.sendMail({
          from: 'ieeeuem@gmail.com', // sender address
          to: email, // list of receivers
          subject: `Confirmação curso ${courseName} do IEEE UEM`, // Subject line
          text: `Prezados,
          Agradecemos sua inscrição no nosso curso de ${courseName}!
          A plataforma a ser utilizada será o Discord, por meio do servidor do Ramo Estudantil IEEE UEM.
          Para acessá-lo, basta fazer o download do programa e acessar o link: https://discord.gg/kxN4yFE
          As salas estarão nomeadas com o respectivo curso. Caso haja dúvidas, favor entrar em contato conosco a partir deste e-mail, ou a partir do contato:
          (44) 98842-1250 - Leonichel` // plain text body,
      })

      if(info) {
        console.log(info)
        return res.send(true)
      }
    } catch (error) {
        console.log(error)
        return res.send(false)
    }
    
  }
}