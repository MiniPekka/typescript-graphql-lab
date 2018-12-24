const reviewRepo = require('./repository');

async function createReview(input) {
  return reviewRepo.createReview(input);
}

module.exports = {
  createReview,
};
