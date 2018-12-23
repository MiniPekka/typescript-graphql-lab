const {
  GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList,
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

module.exports = {
  Book,
};
