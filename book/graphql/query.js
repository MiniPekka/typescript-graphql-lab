const { GraphQLList } = require('graphql');
const { Book } = require('./type');
const BookService = require('../service');

module.exports = {
  books: {
    type: new GraphQLList(Book),
    resolve: async () => {
      return BookService.getBooks();
    },
  },
};
