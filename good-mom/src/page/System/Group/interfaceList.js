import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Table, Popconfirm, Input, Select } from "antd";
import "./style/interfaceList.scss";

import DialogAddInterface from "./components/DialogAddInterface";
import DialogUpdateInterface from "./components/DialogUpdateInterface";

const { Option } = Select;

export class interfaceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      total: 0,
      list: [
        {
          id: 1,
          name: "接口1",
          request: "GET",
          address: "127.0.0.0",
          updateData: "2020-03-03",
          remark: "2222",
        },
      ],
    };
    this.columns = [
      {
        key: "name",
        title: "接口名称",
        dataIndex: "name",
      },
      {
        key: "request",
        title: "请求方式",
        dataIndex: "request",
      },
      {
        key: "address",
        title: "接口地址",
        dataIndex: "address",
      },
      {
        key: "updateData",
        title: "修改日期",
        dataIndex: "updateData",
      },
      {
        key: "remark",
        title: "备注信息",
        dataIndex: "remark",
      },
      {
        key: "id",
        title: "操作",
        render: (text, record) => (
          <div>
            <Button
              //   onClick={() => this.goDetaie(record.id)}
              style={{ marginRight: "10px" }}
            >
              查看用例
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
    this.refs.DialogAddInterface.showModal();
  };

  //   打开更新弹框
  openUpdate = (id) => {
    this.refs.DialogUpdateInterface.showModal();
    this.refs.DialogUpdateInterface.getDetail(id);
  };

  render() {
    return (
      <div className="system-interface">
        <div className="system-interface-title">
          <div className="system-interface-title-item">
            <Button type="primary" onClick={this.showDialog}>
              新增接口
            </Button>
          </div>
          <div className="system-interface-title-item">
            <div className="item-name">接口名称：</div>
            <div className="item-val">
              <Input placeholder="支持模糊搜索" />
            </div>
          </div>
          <div className="system-interface-title-item">
            <div className="item-name">接口地址：</div>
            <div className="item-val">
              <Input placeholder="支持模糊搜索" />
            </div>
          </div>
          <div className="system-interface-title-item">
            <div className="item-name">请求方式：</div>
            <div className="item-val">
              <Select
                style={{ width: 174 }}
                // onChange={handleChange}
              >
                <Option value="GET">GET</Option>
                <Option value="POST">POST</Option>
              </Select>
            </div>
          </div>
          <div className="system-interface-title-item">
            <Button type="primary">查询</Button>
          </div>
        </div>
        <div className="system-interface-table">
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
        <DialogAddInterface ref="DialogAddInterface" />
        <DialogUpdateInterface ref="DialogUpdateInterface" />
      </div>
    );
  }
}

export default withRouter(interfaceList);
