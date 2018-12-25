const { ApolloServer } = require('apollo-server-express');
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const getReviewLoaders = require('../review/repository').getLoaders;
const book = require('../book');

function getSchema() {
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        ...book.getGraphQLQuery(),
      },
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: {
        ...book.getGraphQLMutation(),
      },
    }),
  });
}

function configureGraphQL(app) {
  const schema = getSchema();

  const server = new ApolloServer({
    schema,
    context: {
      loaders: { ...getReviewLoaders() },
    },
  });

  server.applyMiddleware({ app, path: '/graphql' });
}

module.exports = {
  configureGraphQL,
  getSchema,
};
