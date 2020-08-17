import React, { Component, Fragment } from "react";
import { Spin } from "antd";
import marked from "marked";
import moment from "moment";
import "../style/workbench.css";
import {
  Row,
  Col,
  Input,
  Select,
  Button,
  DatePicker,
  Popconfirm,
  message,
} from "antd";
const { Option } = Select;
const { TextArea } = Input;

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  loading: false,
});

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "", //文章的ID
      title: "", //文章标题
      content: "", //markdown的编辑内容
      markdownContent: "", //html内容
      introducemd: "", //简介内容
      time: "", //发布日期
      type: "", //选择的文章类别
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    this.setState({ loading: true });
    React.$api.admin.detail({ id }).then((res) => {
      console.log(res);
      const data = res.data;
      this.setState({
        id,
        title: data.title,
        content: data.content,
        markdownContent: marked(data.content),
        introducemd: data.introducemd,
        type: data.type,
        time: data.time,
      });
      this.setState({ loading: false });
    });
  }

  changeContent = (e) => {
    let html = marked(e.target.value);
    this.setState({
      markdownContent: html,
      content: e.target.value,
    });
  };

  // 发布文章
  release = (e) => {
    React.$api.admin.update(this.state).then((res) => {
      message.success("更新成功");
      this.props.history.push("/");
    });
  };

  // 改变选择内容
  changeSelect = (e) => {
    this.setState({ type: e });
  };

  changeTextArea = (e) => {
    this.setState({ introducemd: e.target.value });
  };

  changeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  changeDate = (date, dateString) => {
    this.setState({ time: dateString });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="loading">
          <Spin />
        </div>
      );
    }
    return (
      <Fragment>
        <div className="workbench">
          <Row gutter={5}>
            <Col span={24}>
              <Row gutter={10}>
                <Col span={8}>
                  <Input
                    defaultValue={this.state.title}
                    onChange={this.changeTitle}
                    placeholder="博客标题"
                  />
                </Col>
                <Col span={8}>
                  <Input
                    onChange={this.changeTextArea}
                    defaultValue={this.state.introducemd}
                    placeholder="文章简介："
                  />
                </Col>
                <Col span={4}>
                  &nbsp;
                  <Select
                    defaultValue={this.state.type}
                    onChange={this.changeSelect}
                    style={{ width: 120 }}
                  >
                    <Option value="1">web前端</Option>
                    <Option value="2">生活</Option>
                    <Option value="3">学习</Option>
                  </Select>
                </Col>
                <Col span={4}>
                  <Row>
                    <Col span={24}>
                      <DatePicker
                        onChange={this.changeDate}
                        placeholder="发布日期"
                        defaultValue={moment(this.state.time, "YYYY-MM-DD")}
                      />
                      <Button type="primary" style={{ marginLeft: "20px" }}>
                        <Popconfirm
                          title="确定修改吗?"
                          onConfirm={() => this.release()}
                          okText="Yes"
                          cancelText="No"
                        >
                          发布文章
                        </Popconfirm>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row gutter={10} style={{ marginTop: "20px" }}>
                <Col span={12}>
                  <TextArea
                    defaultValue={this.state.content}
                    className="markdown-content"
                    rows={35}
                    onChange={this.changeContent}
                    placeholder="文章内容"
                  />
                </Col>
                <Col span={12}>
                  <div
                    className="show-html"
                    dangerouslySetInnerHTML={{
                      __html: this.state.markdownContent,
                    }}
                  ></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Update;
