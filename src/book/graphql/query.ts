import { GraphQLList } from 'graphql';
import { Book } from './type';
import * as BookService from '../service';

export default {
  books: {
    type: new GraphQLList(Book),
    resolve: async () => {
      return BookService.getBooks();
    },
  },
};
