const db = require('../../common/db');
const tasksTableName = 'Tasks';

const getAll = async boardId => {
  const tasks = db.getAll(tasksTableName);
  return boardId ? tasks.filter(task => task.boardId === boardId) : tasks;
};

const get = async (boardId, taskId) => {
  const tasks = await getAll(boardId);
  return tasks.find(task => task.id === taskId);
};

const create = async task => db.create(tasksTableName, task);

const update = async (id, task) => db.update(tasksTableName, id, task);

const remove = async id => db.remove(tasksTableName, id);

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};
