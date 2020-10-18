const tasksRepo = require('./task.memory.repository');

const getAll = async boardId => tasksRepo.getAll(boardId);

const get = async (boardId, taskId) => tasksRepo.get(boardId, taskId);

const create = async task => tasksRepo.create(task);

const update = async (id, task) => tasksRepo.update(id, task);

const remove = async id => tasksRepo.remove(id);

const unassignUserTasks = async userId => {
  const tasks = await getAll();
  tasks
    .filter(task => task.userId === userId)
    .forEach(async task => await update(task.id, { ...task, userId: null }));
};

const removeByBoardId = async boardId => {
  const tasks = await getAll(boardId);
  tasks.forEach(async task => await remove(task.id));
};

module.exports = {
  getAll,
  get,
  create,
  update,
  remove,
  unassignUserTasks,
  removeByBoardId
};
