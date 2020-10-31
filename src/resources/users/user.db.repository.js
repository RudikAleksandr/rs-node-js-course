const User = require('./user.model');

const getAll = async () => User.find();

const get = async id => User.findById(id);

const getByLogin = async login => User.findOne({ login });

const create = async user => User.create(user);

const update = async (id, user) => User.findByIdAndUpdate(id, user);

const remove = async id => User.findByIdAndRemove(id);

module.exports = {
  getAll,
  get,
  getByLogin,
  create,
  update,
  remove
};
