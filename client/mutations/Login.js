import gql from "graphql-tag";

//template string is used to construct the mutation
export default gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;
