const bookRepo = require('./repository');

async function getBookById(id) {
  return bookRepo.getBookById(id);
}

async function getBooks() {
  return bookRepo.getBooks();
}

async function createBook(input) {
  return bookRepo.createBook(input);
}

module.exports = {
  getBookById,
  getBooks,
  createBook,
};
