import React, { Component } from "react";
import {hashHistory} from 'react-router';
import AuthForm from "./AuthForm";
import { graphql } from "react-apollo"; // the glue b/n React & GraphQL wworld
import mutation from "../mutations/Login";
import query from "../queries/CurrentUser";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  onSubmit({ email, password }) {
    // invoke the mutation passing parameter
    this.props
      .mutate({
        variables: {
          email,
          password
        },
        refetchQueries: [{ query }] //telling GraphQL to execute the listed queries after the mutation
      })
      .then(res => hashHistory.push("/"))
      .catch(res => {
        // debugger;
        const errors = res.graphQLErrors.map(e => e.message);
        this.setState({errors})
      });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
