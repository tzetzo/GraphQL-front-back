const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString
  // GraphQLInt,
  // GraphQLSchema,
  // GraphQLList,
  // GraphQLNonNull
} = graphql;
const UserType = require("./user_type");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
