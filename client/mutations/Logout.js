import gql from "graphql-tag";

//template string is used to construct the mutation
export default gql`
  mutation {
    logout {
      id
      email
    }
  }
`;
