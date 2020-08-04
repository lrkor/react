import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
const { Header, Content, Sider } = Layout;
// const { SubMenu } = Menu;

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelectedKeys: ["2"],
    };
  }
  render() {
    return (
      <Router basename="/goodMom">
        <Layout>
          <Header className="header">博客后台管理系统</Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={this.state.defaultSelectedKeys}
                style={{ height: "100%", borderRight: 0 }}
                theme="dark"
              >
                <Menu.Item key="2">
                  <Link to="/">文章列表</Link>
                </Menu.Item>
              </Menu>
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
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default AppRouter;
