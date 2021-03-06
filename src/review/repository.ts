import * as DataLoader from 'dataloader';
import groupBy from 'lodash/groupBy';
import Review from './model';

export async function createReview({ bookId, title, body }) {
  return Review.create({ title, body, book: bookId });
}

async function batchReviews(bookIds) {
  // To prove batching is working
  console.log('BookIds:', bookIds);
  const reviews = await Review.find({ book: { $in: bookIds } });
  const reviewsById = groupBy(reviews, 'book');

  return bookIds.map(bookId => reviewsById[bookId]);
}

export async function reviewsByBookId(bookId, reviewLoader) {
  return reviewLoader.load(bookId);
}

export function getLoaders() {
  return {
    reviewLoader: new DataLoader(batchReviews),
  };
}
