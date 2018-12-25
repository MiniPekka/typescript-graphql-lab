import Book from './model';

export async function getBooks() {
  return Book.find();
}

export async function getBookById(id) {
  return Book.findById(id);
}

export async function createBook(input) {
  return Book.create(input);
}

export async function addBookReview({ bookId, reviewId }) {
  return Book.findOneAndUpdate({ _id: bookId }, { $push: { reviews: reviewId } });
}
