import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import routes from "./config";

// 一级路由
class BaseRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router basename="/goodmom">
        <Switch>
          {routes.map((route, i) => {
            if (route.auth) {
              //根据配置是否检测登录
              return (
                <PrivateRoute key={i} path={route.path}>
                  <route.component />
                </PrivateRoute>
              );
            } else {
              return <RouteWithSubRoutes key={i} {...route} />;
            }
          })}
        </Switch>
      </Router>
    );
  }
}

/*二级路由*/

class SystemRouter extends Component {
  render() {
    return (
      <Switch>
        {routes[2].routes.map((route, i) => {
          if (route.auth) {
            //根据配置是否检测登录
            return (
              <PrivateRoute key={i} path={route.path}>
                <route.component />
              </PrivateRoute>
            );
          } else {
            return <RouteWithSubRoutes key={i} {...route} />;
          }
        })}
      </Switch>
    );
  }
}

export { BaseRouter, SystemRouter };

/*开放路由*/
function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

/*登录检测路由*/
function PrivateRoute({ children, ...rest }) {
  let isAuthenticated = sessionStorage.auth;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
