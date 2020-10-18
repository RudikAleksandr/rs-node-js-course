const db = require('../../common/db');
const boardsTableName = 'Boards';

const getAll = async () => db.getAll(boardsTableName);

const get = async id => db.get(boardsTableName, id);

const create = async board => db.create(boardsTableName, board);

const update = async (id, board) => db.update(boardsTableName, id, board);

const remove = async id => db.remove(boardsTableName, id);

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};
