const tasksRepo = require('./task.db.repository');

const getAll = async boardId => tasksRepo.getAll(boardId);

const get = async (boardId, taskId) => tasksRepo.get(boardId, taskId);

const create = async task => tasksRepo.create(task);

const update = async (id, task) => tasksRepo.update(id, task);

const remove = async id => tasksRepo.remove(id);

const unassignUserTasks = async userId => tasksRepo.unassignUserTasks(userId);

const removeByBoardId = async boardId => tasksRepo.removeByBoardId(boardId);

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
  unassignUserTasks,
  removeByBoardId
};
