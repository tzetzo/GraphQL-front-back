import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
import { graphql } from "react-apollo"; // the glue b/n React & GraphQL world
import query from "../queries/CurrentUser";
import mutation from "../mutations/Logout";

class Header extends Component {
  onLogoutClick() {
    // invoke the mutation passing parameter
    this.props
      .mutate({
        refetchQueries: [{ query }] //telling GraphQL to execute the listed queries after the mutation
      })
      .then(() => hashHistory.push("/"));
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
      return null;
    }

    if (user) {
      return (
        <li>
          <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      );
    }

    return (
      <div>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

//executes the query and places the user under this.props.data.user
//associate mutation & query with the Component
export default graphql(mutation)(graphql(query)(Header));
