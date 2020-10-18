const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.get('/:boardId/tasks', async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  res.json(tasks.map(Task.toResponse));
});

router.get('/:boardId/tasks/:id', async (req, res) => {
  const task = await tasksService.get(req.params.boardId, req.params.id);
  if (!task) {
    return res.status(404).send();
  }

  res.json(Task.toResponse(task));
});

router.post('/:boardId/tasks', async (req, res) => {
  req.body.boardId = req.params.boardId;
  const task = await tasksService.create(new Task(req.body));
  res.json(Task.toResponse(task));
});

router.put('/:boardId/tasks/:id', async (req, res) => {
  const task = await tasksService.update(req.params.id, req.body);
  res.json(Task.toResponse(task));
});

router.delete('/:boardId/tasks/:id', async (req, res) => {
  await tasksService.remove(req.params.id);
  res.status(204).send();
});

module.exports = router;
