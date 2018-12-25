import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInputObjectType,
} from 'graphql';
import { MongoObjectId } from '../../common/graphql/type';
import { Review } from '../../review/graphql/type';
import * as ReviewService from '../../review/service';

export const Book = new GraphQLObjectType({
  name: 'Book',
  fields: {
    _id: { type: new GraphQLNonNull(MongoObjectId) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    reviews: {
      type: new GraphQLList(Review),
      resolve: async (book, args, context) => {
        return ReviewService.reviewsByBookId(book._id, context);
      },
    },
  },
});

// Mutation types
export const CreateBookPayload = new GraphQLObjectType({
  name: 'CreateBookPayload',
  fields: {
    book: { type: new GraphQLNonNull(Book) },
  },
});

export const CreateBookInput = new GraphQLInputObjectType({
  name: 'CreateBookInput',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
  },
});

export const PostReviewPayload = new GraphQLObjectType({
  name: 'PostReviewPayload',
  fields: {
    book: { type: new GraphQLNonNull(Book) },
  },
});

export const PostReviewInput = new GraphQLInputObjectType({
  name: 'PostReviewInput',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
    bookId: { type: new GraphQLNonNull(MongoObjectId) },
  },
});
