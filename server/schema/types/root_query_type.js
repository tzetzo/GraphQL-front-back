const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  // GraphQLInt,
  // GraphQLSchema,
  // GraphQLList,
  // GraphQLNonNull
} = graphql;
// const UserType = require('./user_type');


const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    dummyField: {type: GraphQLString}
  }
});

module.exports = RootQueryType;
