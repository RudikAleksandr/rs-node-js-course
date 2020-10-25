const Board = require('./board.model');

const getAll = async () => Board.find();

const get = async id => Board.findById(id);

const create = async board => Board.create(board);

const update = async (id, board) => Board.findByIdAndUpdate(id, board);

const remove = async id => Board.findByIdAndRemove(id);

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};
