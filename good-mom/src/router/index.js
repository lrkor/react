import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout } from "antd";

import "../style/common.scss";
import MenuList from "../components/MenuList";
import HeaderTool from "../components/HeaderTool";

import Interface from "../page/System/Interface";
import Plan from "../page/System/Plan";
import Project from "../page/System/Project";
import ProjectAdd from "../page/System/Project/add";

import Permission from "../page/User/Permission";
import UserList from "../page/User/List";

const { Header, Content, Sider, Footer } = Layout;

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router basename="/goodmom">
        <Layout>
          <Header>
            <HeaderTool history={this.props.history} />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <MenuList history={this.props.history} />
            </Sider>
            <Layout>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <div className="main">
                  <Switch>
                    <Route path="/management" exact component={Project} />
                    <Route
                      path="/management/system/project"
                      exact
                      component={Project}
                    />
                    <Route
                      path="/management/system/project/add"
                      exact
                      component={ProjectAdd}
                    />
                    <Route
                      path="/management/system/interface"
                      exact
                      component={Interface}
                    />
                    <Route
                      path="/management/system/plan"
                      exact
                      component={Plan}
                    />

                    <Route
                      path="/management/user/list"
                      exact
                      component={UserList}
                    />
                    <Route
                      path="/management/user/permission"
                      exact
                      component={Permission}
                    />
                  </Switch>
                </div>
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default AppRouter;
