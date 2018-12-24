const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
} = require('graphql');

const { MongoObjectId } = require('../../common/graphql/type');
const { Review } = require('../../review/graphql/type');

const Book = new GraphQLObjectType({
  name: 'Book',
  fields: {
    _id: { type: new GraphQLNonNull(MongoObjectId) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    reviews: { type: new GraphQLList(Review) },
  },
});

// Mutation types
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

const PostReviewPayload = new GraphQLObjectType({
  name: 'PostReviewPayload',
  fields: {
    book: { type: new GraphQLNonNull(Book) },
  },
});

const PostReviewInput = new GraphQLInputObjectType({
  name: 'PostReviewInput',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
    bookId: { type: new GraphQLNonNull(MongoObjectId) },
  },
});

module.exports = {
  Book,
  CreateBookPayload,
  CreateBookInput,
  PostReviewPayload,
  PostReviewInput,
};
