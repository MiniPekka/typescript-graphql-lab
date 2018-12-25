const reviewRepo = require('./repository');

async function createReview(input) {
  return reviewRepo.createReview(input);
}

async function reviewsByBookId(bookId, context) {
  const {
    loaders: { reviewLoader },
  } = context;

  return reviewRepo.reviewsByBookId(bookId, reviewLoader);
}

module.exports = {
  createReview,
  reviewsByBookId,
};
