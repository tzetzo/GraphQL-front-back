import gql from "graphql-tag";

//query for the current user; always ask for the id to be returned!
export default gql`
  {
    user {
      id
      email
    }
  }
`;
