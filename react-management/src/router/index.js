import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../style/comm.css'
import Web from '../page/Web'
import Learn from '../page/Learn'
import Life from '../page/Life'

import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;



class AppRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Router>
                <Layout>
                    <Header className="header">
                        博客后台管理系统
                    </Header>
                    <Layout>
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                theme="dark"
                            >
                                <Menu.Item key="1"><Link to="/">web前端</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/learn">生活</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/life">学习</Link></Menu.Item>
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
                                        <Route path="/" exact component={Web} />
                                        <Route path="/learn/" component={Learn} />
                                        <Route path="/life/" component={Life} />
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