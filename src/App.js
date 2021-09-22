import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
const App = () => {
  return (
    <div>
      <h1>Header</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/launches" component={Launches} />
          <Route component={Error} />
        </Switch>
      </Router>
      <h1>Footer</h1>
    </div>
  );
};

export default App;
