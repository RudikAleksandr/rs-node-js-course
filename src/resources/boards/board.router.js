const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.get('/', async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.get('/:id', async (req, res) => {
  const board = await boardsService.get(req.params.id);
  if (board) {
    res.json(Board.toResponse(board));
  }

  res.status(404).send();
});

router.post('/', async (req, res) => {
  const board = await boardsService.create(new Board(req.body));
  res.json(Board.toResponse(board));
});

router.put('/:id', async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);
  res.json(Board.toResponse(board));
});

router.delete('/:id', async (req, res) => {
  await boardsService.remove(req.params.id);
  res.status(204).send();
});

module.exports = router;
