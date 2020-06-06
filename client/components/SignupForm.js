import React, { Component } from "react";
import { hashHistory } from "react-router";
import AuthForm from "./AuthForm";
import { graphql } from "react-apollo"; // the glue b/n React & GraphQL wworld
import mutation from "../mutations/Signup";
import query from "../queries/CurrentUser";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  componentDidUpdate(prevProps){
    //redirect user when query is done - i.e. current user is fetched
    if(!prevProps.data.user && this.props.data.user){
      hashHistory.push("/dashboard")
    }
  }

  onSubmit({ email, password }) {
    // invoke the mutation passing parameter
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query }] //telling GraphQL to execute the listed queries after the mutation; runs at the same time as the next then()!
      })
      //.then(res => hashHistory.push("/")); //runs at the same time as the refetchQueries!
      .catch(res => {
        // debugger;
        const errors = res.graphQLErrors.map(e => e.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
