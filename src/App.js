import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Launches from "./pages/Launches";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/launches" component={Launches} />
          <Route component={Error} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
