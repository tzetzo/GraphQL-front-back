import gql from "graphql-tag";

//template string is used to construct the mutation
export default gql`
  mutation SignUp($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;
