const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Review', reviewSchema);
