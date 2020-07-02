const Course = require('../models/Course')
const transporter = require('../config/mailer')

module.exports = {
  async getList(req, res) {
    const { sort, filter, range, select } = req.query
    
    try {
      var sortObj = JSON.parse(sort || null)
      if(sortObj) sortObj = sortObj.join(" ")
      var filterObj = JSON.parse(filter || null)
      //var rangeObj = JSON.parse(range || null)
  
      var selectObj = JSON.parse(select || null)
      if(selectObj) selectObj = selectObj.join(" ")
  
      const courses = await Course
        .find(filterObj)
        .sort(sortObj)
        .select(selectObj)
      
      return res.send({ total: courses.length, courses })
    } catch (error) {
      console.log(error)
      return res.status(500).send(errro)
    }
  },

  async getOne(req, res) {
    const { courseId } = req.params

    const course = await Course.findById(courseId)

    return res.send(course)
  },

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
          A plataforma a ser utilizada será o Google Meet, por meio do link https://meet.google.com/nys-qdjh-dzu.
          Para acessá-lo, basta possuir conta google e pedir para adentrar na reunião no dia e horário do curso respectivo.
          Caso queira interagir com os membros e colaboradores do IEEE UEM via Discord, basta acessar o link: https://discord.gg/kxN4yFE
          Caso haja dúvidas, favor entrar em contato conosco a partir desse e-mail, ou do contato:
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