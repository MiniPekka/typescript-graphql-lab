import { ApolloServer } from 'apollo-server-express';
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { getLoaders as getReviewLoaders } from '../review/repository';
import * as book from '../book';

export function getSchema() {
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

export function configureGraphQL(app) {
  const schema = getSchema();

  const server = new ApolloServer({
    schema,
    context: {
      loaders: { ...getReviewLoaders() },
    },
  });

  server.applyMiddleware({ app, path: '/graphql' });
}
