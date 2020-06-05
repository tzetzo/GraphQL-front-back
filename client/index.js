import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client"; //makes the requests to the back-end server
import { ApolloProvider } from "react-apollo";
import { Router, hashHistory, Route } from "react-router";
import App from "./components/App";

//create our custom network interface
const networkInterface = createNetworkInterface({
  uri: "/graphql", //confirm the endpoint
  opts: {
    credentials: "same-origin" //tell ApolloClient to send Cookies when making requests to the back-end
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id // to make Apollo identify every record we fetch; we should always include the id in our queries
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          {/*
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />*/}
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
