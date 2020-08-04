import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Layout, Menu } from "antd";
import "../style/common.scss";

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const { Header, Content, Sider, Footer } = Layout;

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      defaultSelectedKeys: ["2"],
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">自动化测试</Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  Option 2
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                  Option 3
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  icon={<MailOutlined />}
                  title="Navigation One"
                >
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<AppstoreOutlined />}
                  title="Navigation Two"
                >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </SubMenu>
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
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default AppRouter;
