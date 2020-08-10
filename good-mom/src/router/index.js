import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { SystemRouter } from "./base";

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
                <SystemRouter />
              </div>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

// export default AppRouter;
export default withRouter(AppRouter);
