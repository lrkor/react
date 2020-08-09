import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../page/Login/index";
import index from "./index";

class BaseRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router basename="/goodmom">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/management" component={index} />
        </Switch>
      </Router>
    );
  }
}

export default BaseRouter;
