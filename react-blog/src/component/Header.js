import React, { Component, Fragment } from 'react';
import { Avatar, Menu } from 'antd'
import { CopyOutlined, CoffeeOutlined, BookOutlined } from '@ant-design/icons';
import { Link  } from "react-router-dom";
import '../style/component/header.css'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'web',
        }
    }

    handleClick(e) {
        this.setState({
            current: e.key,
        });
    };


    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="header-left">
                        <div className="header-left-title">
                            {/* <Link to="/"></Link> */}
                            Lrkor的博客
                        </div>
                        <div className="header-left-list">
                            <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
                                <Menu.Item key="web">
                                    <CopyOutlined className="header-left-list-item-icon" />
                                        web前端
                                </Menu.Item>
                                <Menu.Item key="life">
                                    <CoffeeOutlined className="header-left-list-item-icon" />
                                    生活
                                </Menu.Item>
                                <Menu.Item key="book">
                                    <BookOutlined className="header-left-list-item-icon" />
                                    读书
                                </Menu.Item>
                            </Menu>
                            {/* <div className="header-left-list-item"><CopyOutlined className="header-left-list-item-icon" />web前端</div>
                            <div className="header-left-list-item"><CoffeeOutlined className="header-left-list-item-icon" />生活</div>
                            <div className="header-left-list-item"><BookOutlined className="header-left-list-item-icon" />读书</div> */}
                        </div>
                    </div>
                    <div className="header-right">
                        <Avatar size={30} src="http://www.17qq.com/img_qqtouxiang/75983189.jpeg"></Avatar>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Header;