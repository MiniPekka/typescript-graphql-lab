import * as reviewRepo from './repository';

export async function createReview(input) {
  return reviewRepo.createReview(input);
}

export async function reviewsByBookId(bookId, context) {
  const {
    loaders: { reviewLoader },
  } = context;

  return reviewRepo.reviewsByBookId(bookId, reviewLoader);
}
