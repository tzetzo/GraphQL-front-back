const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
  // GraphQLInt,
  // GraphQLSchema,
  // GraphQLList,
  // GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  })
});

module.exports = UserType;
