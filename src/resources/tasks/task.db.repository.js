const Task = require('./task.model');

const getAll = async boardId => Task.find(boardId ? { boardId } : {});

const get = async (boardId, taskId) => Task.findOne({ _id: taskId, boardId });

const create = async task => Task.create(task);

const update = async (id, task) => Task.findByIdAndUpdate(id, task);

const remove = async id => Task.findByIdAndRemove(id);

const removeByBoardId = async boardId => Task.remove({ boardId });

const unassignUserTasks = async userId =>
  Task.updateMany({ userId }, { userId: null });

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
  removeByBoardId,
  unassignUserTasks
};
