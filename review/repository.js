const DataLoader = require('dataloader');
const groupBy = require('lodash/groupBy');
const Review = require('./model');

async function createReview({ bookId, title, body }) {
  return Review.create({ title, body, book: bookId });
}

async function batchReviews(bookIds) {
  // To prove batching is working
  console.log('BookIds:', bookIds);
  const reviews = await Review.find({ book: { $in: bookIds } });
  const reviewsById = groupBy(reviews, 'book');

  return bookIds.map(bookId => reviewsById[bookId]);
}

async function reviewsByBookId(bookId, reviewLoader) {
  return reviewLoader.load(bookId);
}

function getLoaders() {
  return {
    reviewLoader: new DataLoader(batchReviews),
  };
}

module.exports = {
  createReview,
  reviewsByBookId,
  getLoaders,
};
