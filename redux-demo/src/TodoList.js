import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

const data = [
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]


class TodoList extends Component {

    constructor(porps) {
        super(porps);
        this.state = store.getState();
        console.log(store.getState())
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Input placeholder="请输入内容" style={{ width: '250px' }} />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </Fragment>
        );
    }
}
export default TodoList;