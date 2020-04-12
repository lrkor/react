import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../style/comm.css'
import WebList from '../page/web/List'
import LearnList from '../page/learn/List'
import LifeList from '../page/life/List'
import Workbench from '../page/Workbench'

import { Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


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
                                <Menu.Item key="1"><Link to="/">工作台</Link></Menu.Item>
                                <SubMenu
                                    key="web"
                                    title="web前端"
                                >
                                    <Menu.Item key="1"><Link to="/web/list">文章列表</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="life"
                                    title="生活"
                                >
                                    <Menu.Item key="2"><Link to="/learn/list">文章列表</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="learn"
                                    title="学习"
                                >
                                    <Menu.Item key="3"><Link to="/life/list">文章列表</Link></Menu.Item>
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
                                        <Route path="/" exact component={Workbench} />
                                        <Route path="/web/list" exact component={WebList} />
                                        <Route path="/learn/list" component={LearnList} />
                                        <Route path="/life/list" component={LifeList} />
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