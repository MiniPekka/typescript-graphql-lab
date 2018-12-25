const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const { MongoObjectId } = require('../../common/graphql/type');

const Review = new GraphQLObjectType({
  name: 'Review',
  fields: {
    _id: { type: new GraphQLNonNull(MongoObjectId) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = {
  Review,
};
