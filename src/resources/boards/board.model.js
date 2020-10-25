const uuid = require('uuid');
const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema(
  {
    title: String,
    columns: [
      {
        title: String,
        order: Number,
        _id: {
          type: String,
          default: uuid
        }
      }
    ],
    _id: {
      type: String,
      default: uuid
    }
  },
  {
    versionKey: false
  }
);

boardSchema.static('toResponse', board => {
  const { _id, title, columns } = board;
  return { id: _id, title, columns };
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
