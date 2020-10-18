const db = require('../../common/db');
const boardsTableName = 'Boards';
const tasksTableName = 'Tasks';

const getAll = async () => db.getAll(boardsTableName);

const get = async id => db.get(boardsTableName, id);

const create = async board => db.create(boardsTableName, board);

const update = async (id, board) => db.update(boardsTableName, id, board);

const remove = async id => {
  db.getAll(tasksTableName)
    .filter(task => task.boardId === id)
    .forEach(task => db.remove(tasksTableName, task.id));

  return db.remove(boardsTableName, id);
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};
