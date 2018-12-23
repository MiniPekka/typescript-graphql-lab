const {
  GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID,
} = require('graphql');

const Review = new GraphQLObjectType({
  name: 'Review',
  fields: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
  },
});

module.exports = {
  Review,
};
