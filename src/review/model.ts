import * as mongoose from 'mongoose';

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

export default mongoose.model('Review', reviewSchema);
