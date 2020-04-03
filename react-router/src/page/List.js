import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        // 获取路由对象
        console.log(this.props.match);
        let id = this.props.match.params.id
        this.setState({ id })
    }

    render() {
        return (
            <h2>我是列表页</h2>
        );
    }
}

export default List;