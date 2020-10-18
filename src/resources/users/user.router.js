const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.get('/', async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.get('/:id', async (req, res) => {
  const user = await usersService.get(req.params.id);
  if (user) {
    res.json(User.toResponse(user));
  }

  res.status(404).send();
});

router.post('/', async (req, res) => {
  const user = await usersService.create(new User(req.body));
  res.json(User.toResponse(user));
});

router.put('/:id', async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);
  res.json(User.toResponse(user));
});

router.delete('/:id', async (req, res) => {
  await usersService.remove(req.params.id);
  res.status(204).send();
});

module.exports = router;
