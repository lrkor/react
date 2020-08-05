import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Layout } from "antd";

import "../style/common.scss";
import MenuList from "../components/MenuList";
import HeaderTool from "../components/HeaderTool";
const { Header, Content, Sider, Footer } = Layout;

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Layout>
          <Header>
            <HeaderTool history={this.props.history} />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <MenuList />
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
                    {/* <Route path="/" exact component={WebList} />
                    <Route path="/add" exact component={Add} />
                    <Route path="/update/:id" exact component={Update} />
                    <Route path="/learn/list" component={LearnList} />
                    <Route path="/life/list" component={LifeList} /> */}
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
