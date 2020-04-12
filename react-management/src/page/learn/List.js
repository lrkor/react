import React, { Component } from 'react';
import { Button, Table } from 'antd'
import '../../style/list.css'

class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1,
            total2: 20
        };

         this.columns = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '标题',
                dataIndex: 'title',
            },
            {
                title: '上传时间',
                dataIndex: 'uploadTime',
            },
            {
                title: '操作',
                render: (text, record) => (
                    <div>
                        <Button type="primary" onClick={()=>this.update(record.id)} style={{ marginRight: '10px' }}>编辑</Button>
                        <Button danger onClick={()=>this.del(record.id)}>删除</Button>
                    </div>
                ),
            },
        ];
        
        this.data = [
            {
                id: '1',
                title: '我的第一个文章',
                uploadTime: '2020-04-18',
            },
            {
                id: '2',
                title: '我的第一个文章',
                uploadTime: '2020-04-18',
            },
            {
                id: '3',
                title: '我的第一个文章',
                uploadTime: '2020-04-18',
            },
            {
                id: '4',
                title: '我的第一个文章',
                uploadTime: '2020-04-18',
            },
            {
                id: '4',
                title: '我的第一个文章',
                uploadTime: '2020-04-18',
            },
            {
                id: '4',
                title: '我的第一个文章',
                uploadTime: '2020-04-18',
            },
            {
                id: '4',
                title: '我的第一个文章',
                uploadTime: '2020-04-18',
            },
            {
                id: '4',
                title: '我的第一个文章',
                uploadTime: '2020-04-18',
            },
            {
                id: '4',
                title: '我的第一个文章',
                uploadTime: '2020-04-18',
            },
            {
                id: '4',
                title: '我的第一个文章',
                uploadTime: '2020-04-18',
            },
        ];
        

    }

    changePage = (page) => {
        console.log(page);
        this.setState({
            current: page
        });
    }

    update = id => {
        console.log(id)
    }

    del = id => {
        console.log(id)
    }


    render() {
        return (
            <div className="list">
                <div className="header">
                    <Button type="primary">新增</Button>
                </div>
                <div className="table-body">
                    <Table
                        columns={this.columns}
                        dataSource={this.data}
                        bordered
                        pagination={{
                            current: this.state.current,
                            total: this.state.total2,
                            onChange: this.changePage,
                        }}
                        rowKey={(record, index) => index}
                    />
                </div>
                <div className="table-paging">

                </div>
            </div>
        );
    }
}

export default Learn;