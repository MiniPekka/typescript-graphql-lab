import { GraphQLNonNull } from 'graphql';
import * as bookService from '../service';
import {
  CreateBookPayload, CreateBookInput, PostReviewPayload, PostReviewInput,
} from './type';

export default {
  createBook: {
    type: CreateBookPayload,
    args: {
      input: {
        type: new GraphQLNonNull(CreateBookInput),
      },
    },
    resolve: async (_, { input }) => {
      const { title } = input;
      const book = await bookService.createBook({ title });

      return {
        book,
      };
    },
  },
  postReview: {
    type: PostReviewPayload,
    args: {
      input: {
        type: new GraphQLNonNull(PostReviewInput),
      },
    },
    resolve: async (_, { input }) => {
      const book = await bookService.postBookReview(input);

      return {
        book,
      };
    },
  },
};
