const Member = require('../models/Member');

module.exports = {
  async getList(req, res) {
    const { sort, filter, range } = req.query;

    const members = await Member.find();

    return res.send(members);
  },

  async getOne(req, res) {
    const { memberId } = req.params;

    const member = await Member.findById(memberId);

    return res.send(member);
  },

  async create(req, res) {
    const member = req.body;

    const newMember = await Member.create(member);

    return res.send(newMember);
  },

  async createMany(req, res) {
    const members = req.body;

    members.map(async element => await Member.create(element));

    return res.send(true);
  },
};
