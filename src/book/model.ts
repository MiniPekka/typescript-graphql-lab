import * as mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String },
  // Remove reviews to demostrate the usage of dataloader
  // reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', autopopulate: true }],
});

bookSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model('Book', bookSchema);
