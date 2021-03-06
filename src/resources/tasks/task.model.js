const uuid = require('uuid');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: String,
    order: Number,
    description: String,
    userId: String,
    boardId: String,
    columnId: String,
    _id: {
      type: String,
      default: uuid
    }
  },
  {
    versionKey: false
  }
);

taskSchema.static('toResponse', task => {
  const { _id, title, order, description, userId, columnId, boardId } = task;
  return { id: _id, title, order, description, userId, columnId, boardId };
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
