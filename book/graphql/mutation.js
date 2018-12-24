const { GraphQLNonNull } = require('graphql');

const bookService = require('../service');
const {
  CreateBookPayload,
  CreateBookInput,
  PostReviewPayload,
  PostReviewInput,
} = require('./type');

module.exports = {
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
