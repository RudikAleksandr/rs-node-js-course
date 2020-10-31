const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/task.service');
const bcrypt = require('bcrypt');

const getAll = async () => usersRepo.getAll();

const get = async id => usersRepo.get(id);

const getByLogin = async login => usersRepo.getByLogin(login);

const create = async user => {
  user.password = await bcrypt.hash(user.password, 10);
  return usersRepo.create(user);
};

const update = async (id, user) => usersRepo.update(id, user);

const remove = async id => {
  await tasksService.unassignUserTasks(id);
  return usersRepo.remove(id);
};

module.exports = {
  getAll,
  get,
  getByLogin,
  create,
  update,
  remove
};
