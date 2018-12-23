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

module.exports = {
  getBookById,
  getBooks,
  createBook,
};
