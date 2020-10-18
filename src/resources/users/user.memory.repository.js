const db = require('../../common/db');
const usersTableName = 'Users';
const tasksTableName = 'Tasks';

const getAll = async () => db.getAll(usersTableName);

const get = async id => db.get(usersTableName, id);

const create = async user => db.create(usersTableName, user);

const update = async (id, user) => db.update(usersTableName, id, user);

const remove = async id => {
  db.getAll(tasksTableName)
    .filter(task => task.userId === id)
    .forEach(task =>
      db.update(tasksTableName, task.id, { ...task, userId: null })
    );

  return db.remove(usersTableName, id);
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};
