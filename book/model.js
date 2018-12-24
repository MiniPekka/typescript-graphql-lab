const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', autopopulate: true }],
});

bookSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Book', bookSchema);
