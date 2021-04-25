const Ramo = require('../models/Ramo');
const Membro = require('../models/Membro');

module.exports = {
  async create(req, res) {
    try {
      const { userId, name, description, icon, location, membro } = req.body;

      const user = await Membro.findById(userId);
      if (!user.admin) return res.send('Não permitido');

      const ramo = await Ramo.create({
        name,
        description,
        icon,
        location,
      });
      const membroDir = await Membro.create({
        name: membro.name,
        avatar: membro.avatar,
        officer: true,
        ramo: ramo._id,
      });

      ramo.membros.push(membroDir._id);
      await ramo.save();

      return res.send({ sucess: true, ramo });
    } catch (error) {
      return res.send({ error });
    }
  },

  async getRamos(req, res) {
    try {
      const { page = 1 } = req.query;
      const ramos = await Ramo.paginate(
        {},
        {
          page,
          select: ['icon'],
          /* populate: [{
                    path: 'membros',
                    select: ['name', 'avatar', 'officer']
                }, {
                    path: 'posts',
                    select: ['description', 'image']
                }], */
          limit: 10,
        },
      );

      return res.send({ ramos });
    } catch (error) {
      return res.send({ error });
    }
  },

  async get(req, res) {
    try {
      // Pensar em fazer com paginação
      const { ramoId } = req.params;
      const ramo = await Ramo.findById(ramoId)
        .populate({
          path: 'posts',
          select: ['description', 'image'],
          options: {
            limit: 5,
          },
        })
        .populate({
          path: 'membros',
          select: ['name', 'avatar', 'officer'],
        });

      return res.send({ ramo });
    } catch (error) {
      return res.send({ error });
    }
  },
};
