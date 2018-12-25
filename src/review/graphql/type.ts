// const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
// const { MongoObjectId } = require('../../common/graphql/type');

import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import { MongoObjectId } from '../../common/graphql/type';

export const Review = new GraphQLObjectType({
  name: 'Review',
  fields: {
    _id: { type: new GraphQLNonNull(MongoObjectId) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
  },
});
