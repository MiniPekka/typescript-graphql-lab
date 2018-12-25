const queries = require('./graphql/query');
const mutations = require('./graphql/mutation');

/**
 * Setup GraphQL query fields for current module
 */
function getGraphQLQuery() {
  return {
    ...queries,
  };
}

/**
 * Setup GraphQL mutations for current module
 */
function getGraphQLMutation() {
  return {
    ...mutations,
  };
}

module.exports = {
  // getServices,
  getGraphQLQuery,
  getGraphQLMutation,
};
