const Book = require('./model');

async function getBooks() {
  return Book.find();
}

async function getBookById(id) {
  return Book.findById(id);
}

async function createBook(input) {
  return Book.create(input);
}

async function addBookReview({ bookId, reviewId }) {
  return Book.findOneAndUpdate({ _id: bookId }, { $push: { reviews: reviewId } });
}

module.exports = {
  getBookById,
  getBooks,
  createBook,
  addBookReview,
};
