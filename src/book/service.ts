// const ObjectId = require('mongoose').Types.ObjectId;
import * as mongoose from 'mongoose';
import * as bookRepo from './repository';
import * as reviewService from '../review/service';

const ObjectId = mongoose.Types.ObjectId;

export async function getBookById(id) {
  return bookRepo.getBookById(id);
}

export async function getBooks() {
  return bookRepo.getBooks();
}

export async function createBook(input) {
  return bookRepo.createBook(input);
}

export async function postBookReview({ bookId, title, body }) {
  const book = await bookRepo.getBookById(new ObjectId(bookId));

  if (!book) {
    throw new Error('BookId not found.');
  }

  const newReview = await reviewService.createReview({ bookId, title, body });
  const result = await bookRepo.addBookReview({ bookId, reviewId: newReview._id });

  return result;
}
