import React, { Component } from "react";
import { Button, Table, Popconfirm, message } from "antd";
import "../../style/list.css";

class Web extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      total: 0,
      list: [],
    };
    this.columns = [
      {
        key: "id",
        title: "id",
        dataIndex: "id",
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

  componentDidMount() {
    this.getList();
  }

  //获取列表
  getList(page = this.state.page) {
    React.$api.admin.list({ page, size: 10 }).then((res) => {
      let list = res.data;
      list.forEach((item) => {
        item.type =
          item.type === "1" ? "web前端" : item.type === "2" ? "生活" : "学习";
      });
      this.setState({ list, total: res.total });
    });
  }

  //删除文章
  del(id) {
    if (this.state.list.length === 1 && this.state.page !== 1) {
      let page = this.state.page + 1;
      this.setState({ page });
    }
    React.$api.admin.delete({ id }).then((res) => {
      this.getList(this.state.page);
      message.success("删除成功");
    });
  }

  changePage = (page) => {
    this.setState({ page }, () => {
      this.getList();
    });
  };

  update = (id) => {
    this.props.history.push(`/update/${id}`);
  };

  render() {
    return (
      <div className="list">
        <div className="header">
          <Button
            type="primary"
            onClick={() => this.props.history.push("/add")}
          >
            新增
          </Button>
        </div>
        <div className="table-body">
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

export default Web;
