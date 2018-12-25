// const queries = require('./graphql/query');
// const mutations = require('./graphql/mutation');
import queries from './graphql/query';
import mutations from './graphql/mutation';

/**
 * Setup GraphQL query fields for current module
 */
export function getGraphQLQuery() {
  return {
    ...queries,
  };
}

/**
 * Setup GraphQL mutations for current module
 */
export function getGraphQLMutation() {
  return {
    ...mutations,
  };
}
