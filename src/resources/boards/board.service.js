const boardsRepo = require('./board.memory.repository');

const getAll = async () => boardsRepo.getAll();

const get = async id => boardsRepo.get(id);

const create = async user => boardsRepo.create(user);

const update = async (id, user) => boardsRepo.update(id, user);

const remove = async id => boardsRepo.remove(id);

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};
