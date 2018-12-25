// const queries = require('./graphql/query');
// const mutations = require('./graphql/mutation');
const { loaders } = require('./repository');

// /**
//  * Setup GraphQL query fields for current module
//  */
// function getGraphQLQuery() {
//   return {
//     ...queries,
//   };
// }

// /**
//  * Setup GraphQL mutations for current module
//  */
// function getGraphQLMutation() {
//   return {
//     ...mutations,
//   };
// }

function getLoaders() {
  return {
    ...loaders,
  };
}

module.exports = {
  // getServices,
  // getGraphQLQuery,
  // getGraphQLMutation,
  getLoaders,
};
