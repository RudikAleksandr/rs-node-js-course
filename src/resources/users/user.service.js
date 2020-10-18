const usersRepo = require('./user.memory.repository');

const getAll = async () => usersRepo.getAll();

const get = async id => usersRepo.get(id);

const create = async user => usersRepo.create(user);

const update = async (id, user) => usersRepo.update(id, user);

const remove = async id => usersRepo.remove(id);

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};
