const { GraphQLScalarType, Kind } = require('graphql');
const { Schema } = require('mongoose');

const ObjectId = Schema.Types.ObjectId;

const MongoObjectId = new GraphQLScalarType({
  name: 'ObjectId',
  description: 'Mongo object id scalar type',
  parseValue(value) {
    return new ObjectId(value); // value from the client input variables
  },
  serialize(value) {
    return value.toHexString(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new ObjectId(ast.value); // value from the client query
    }
    return null;
  },
});

module.exports = {
  MongoObjectId,
};
