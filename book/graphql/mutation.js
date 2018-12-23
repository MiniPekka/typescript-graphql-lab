const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');
const { Book } = require('./type');
const { createBook } = require('../service');

const CreateBookPayload = new GraphQLObjectType({
  name: 'CreateBookPayload',
  fields: {
    book: { type: new GraphQLNonNull(Book) },
  },
});

const CreateBookInput = new GraphQLInputObjectType({
  name: 'CreateBookInput',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
  },
});

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
      const book = await createBook({ title });

      return {
        book,
      };
    },
  },
};
