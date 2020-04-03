import React, { Component, Fragment } from 'react';
import { List } from 'antd'
import { Link  } from "react-router-dom";
import '../../style/page/web/list.css'

const data = [1, 2, 3, 4, 5];


class WebList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'web',
        }
    }
    render() {
        return (
            <Fragment>
                <List
                    dataSource={data}
                    renderItem={(item, index) => {
                        return (
                            <List.Item>
                                <div className="web-item">
                                    <div className="web-item-title">
                                        <Link to="/web/detail/454">es6第一天</Link>                
                                    </div>
                                    <div className="web-item-content">
                                        简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
                                        简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
                                        简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
                                        简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
                                    </div>
                                    <div className="web-item-footer">
                                        <div className="web-item-footer-time">2020-03-28</div>
                                        <div className="web-item-footer-number">132人查看</div>
                                    </div>
                                </div>
                            </List.Item>
                        )
                    }
                    }
                />
            </Fragment>
        );
    }
}

export default WebList;