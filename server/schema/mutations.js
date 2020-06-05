const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  // GraphQLInt,
  // GraphQLSchema,
  // GraphQLList,
  GraphQLNonNull
} = graphql;

const UserType = require("./types/user_type");
const AuthService = require("../services/auth");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      // signup user
      type: UserType, //returned type from resolve() --> not necessarily the same as what we work on
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) }, //required arg
        password: { type: new GraphQLNonNull(GraphQLString) } //required arg
      },
      resolve(parentValue, { email, password }, req) {
        // req object coming from express
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      // logout user
      type: UserType, //returned type from resolve() --> not necessarily the same as what we work on
      resolve(parentValue, args, req) {
        // req object coming from express
        const {user} = req;
        req.logout();
        return user;
      }
    },
    login: {
      // login user
      type: UserType, //returned type from resolve() --> not necessarily the same as what we work on
      args: {
        email: { type: new GraphQLNonNull(GraphQLString) }, //required arg
        password: { type: new GraphQLNonNull(GraphQLString) } //required arg
      },
      resolve(parentValue, { email, password }, req) {
        // req object coming from express
        return AuthService.login({ email, password, req });
      }
    }
  }
});

module.exports = mutation;
