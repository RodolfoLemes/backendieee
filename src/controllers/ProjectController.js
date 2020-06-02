const Project = require('../models/Project')

module.exports = {
  async getList(req, res) {
    const { sort, filter, range } = req.query

    const projects = await Project.find()

    return res.send(projects)
  },

  async getOne(req, res) {
    const { projectId } = req.params

    const project = await Project.findById(projectId)

    return res.send(project)
  },

  async create(req, res) {
    const { project } = req.body

    const newProject = await Project.create(project)

    return res.send(newProject)
  }
}