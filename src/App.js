import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/launches" component={Launches} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
