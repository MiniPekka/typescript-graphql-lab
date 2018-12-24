const ObjectId = require('mongoose').Types.ObjectId;
const bookRepo = require('./repository');
const reviewService = require('../review/service');

async function getBookById(id) {
  return bookRepo.getBookById(id);
}

async function getBooks() {
  return bookRepo.getBooks();
}

async function createBook(input) {
  return bookRepo.createBook(input);
}

async function postBookReview({ bookId, title, body }) {
  const book = await bookRepo.getBookById(new ObjectId(bookId));

  if (!book) {
    throw new Error('BookId not found.');
  }

  const newReview = await reviewService.createReview({ bookId, title, body });
  const result = await bookRepo.addBookReview({ bookId, reviewId: newReview._id });

  return result;
}

module.exports = {
  getBookById,
  getBooks,
  createBook,
  postBookReview,
};
