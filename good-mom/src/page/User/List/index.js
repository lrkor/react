import React, { Component } from "react";
import { Button, Table, Popconfirm } from "antd";

import "./index.scss";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      total: 0,
      list: [],
    };
    this.columns = [
      {
        key: "name",
        title: "用户名",
        dataIndex: "name",
      },
      {
        key: "title",
        title: "标题",
        dataIndex: "title",
      },
      {
        key: "time",
        title: "上传时间",
        dataIndex: "time",
      },
      {
        key: "type",
        title: "类型",
        dataIndex: "type",
      },
      {
        key: "id",
        title: "操作",
        render: (text, record) => (
          <div>
            <Button
              type="primary"
              onClick={() => this.update(record.id)}
              style={{ marginRight: "10px" }}
            >
              编辑
            </Button>
            <Button danger>
              <Popconfirm
                title="确定删除吗?"
                onConfirm={() => this.del(record.id)}
                okText="Yes"
                cancelText="No"
              >
                删除
              </Popconfirm>
            </Button>
          </div>
        ),
      },
    ];
  }

  render() {
    return (
      <div className="user-list">
        <div className="user-list-title">
          <Button>新增</Button>
        </div>
        <div className="user-list-table">
          <Table
            columns={this.columns}
            dataSource={this.state.list}
            bordered
            pagination={{
              current: this.state.page,
              total: this.state.total,
              onChange: this.changePage,
            }}
            rowKey={(record) => record.id}
          />
        </div>
      </div>
    );
  }
}

export default index;
