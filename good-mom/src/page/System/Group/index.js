import React, { Component } from "react";
import { Button, Table, Popconfirm, message } from "antd";
import DialogAdd from "./components/DialogAdd";
import "./style/index.scss";
import DialogUpdate from "./components/DialogUpdate";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      total: 0,
      list: [
        {
          id: 1,
          module: "分组模块",
          remark: "备注信息",
          createData: "2020-03-03",
          updateData: "2020-03-03",
        },
      ],
    };
    this.columns = [
      {
        key: "module",
        title: "分组模块",
        dataIndex: "module",
      },
      {
        key: "remark",
        title: "备注信息",
        dataIndex: "remark",
      },
      {
        key: "createData",
        title: "创建日期",
        dataIndex: "createData",
      },
      {
        key: "updateData",
        title: "修改日期",
        dataIndex: "updateData",
      },
      {
        key: "id",
        title: "操作",
        render: (text, record) => (
          <div>
            <Button
              //   onClick={() => this.update(record.id)}
              style={{ marginRight: "10px" }}
            >
              查看
            </Button>
            <Button
              type="primary"
              onClick={() => this.openUpdate(record.id)}
              style={{ marginRight: "10px" }}
            >
              编辑
            </Button>
            <Button danger>
              <Popconfirm
                title="确定删除吗?"
                // onConfirm={() => this.del(record.id)}
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

  showDialog = () => {
    this.refs.DialogAdd.showModal();
  };

  openUpdate = (id) => {
    this.refs.DialogUpdate.showModal();
    this.refs.DialogUpdate.getDetail(id);
  };

  render() {
    return (
      <div className="system-group">
        <div className="system-group-title">
          <Button type="primary" onClick={this.showDialog}>
            新增分组
          </Button>
        </div>
        <div className="system-group-table">
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
        <DialogAdd ref="DialogAdd" />
        <DialogUpdate ref="DialogUpdate" />
      </div>
    );
  }
}

export default index;
