import React, { Component, Fragment } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
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
                                <Menu.Item key="1">web前端</Menu.Item>
                                <Menu.Item key="2">生活</Menu.Item>
                                <Menu.Item key="3">学习</Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>

                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                Content
        </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Fragment>
        );
    }
}

export default Index;