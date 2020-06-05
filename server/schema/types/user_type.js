const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString
  // GraphQLInt,
  // GraphQLSchema,
  // GraphQLList,
  // GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    email: { type: GraphQLString }
  })
});

module.exports = UserType;
