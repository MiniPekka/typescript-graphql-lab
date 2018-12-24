const Review = require('./model');

async function createReview({ bookId, title, body }) {
  return Review.create({ title, body, book: bookId });
}

module.exports = {
  createReview,
};
