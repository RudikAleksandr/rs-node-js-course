const db = require('../../common/db');
const usersTableName = 'Users';

const getAll = async () => db.getAll(usersTableName);

const get = async id => db.get(usersTableName, id);

const create = async user => db.create(usersTableName, user);

const update = async (id, user) => db.update(usersTableName, id, user);

const remove = async id => db.remove(usersTableName, id);

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};
