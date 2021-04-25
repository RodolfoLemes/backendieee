const Membro = require('../models/Membro');

module.exports = {
  async createAdmin(req, res) {
    try {
      const { name, avatar, officer, admin } = req.body;

      const user = await Membro.create({
        name,
        avatar,
        officer,
        admin,
      });

      return res.send({ user });
    } catch (error) {
      return res.send({ error });
    }
  },
};
