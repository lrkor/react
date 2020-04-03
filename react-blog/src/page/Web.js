import React, { Component, Fragment } from 'react';
import { List } from 'antd'
import '../style/page/home.css'

const data = [1, 2, 3, 4, 5];


class Web extends Component {
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
                                        22
                            </List.Item>
                        )
                    }
                    }
                />
            </Fragment>
        );
    }
}

export default Web;