import React, { Component, Fragment } from "react";
import marked from "marked";
import "../style/workbench.css";
import { Row, Col, Input, Select, Button, DatePicker } from "antd";
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
});

class Workbench extends Component {
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

  changeContent = (e) => {
    let html = marked(e.target.value);
    this.setState({
      markdownContent: html,
      content: e.target.value,
    });
  };

  // 发布文章
  release = (e) => {
    React.$api.admin.addArticle(this.state).then((res) => {
        // let data = res.data;
        // this.setState({ data });
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
    return (
      <Fragment>
        <div className="workbench">
          <Row gutter={5}>
            <Col span={18}>
              <Row gutter={10}>
                <Col span={20}>
                  <Input onChange={this.changeTitle} placeholder="博客标题" />
                </Col>
                <Col span={4}>
                  &nbsp;
                  <Select
                    defaultValue="1"
                    onChange={this.changeSelect}
                    style={{ width: 120 }}
                  >
                    <Option value="1">web前端</Option>
                    <Option value="2">生活</Option>
                    <Option value="3">学习</Option>
                  </Select>
                </Col>
              </Row>
              <Row gutter={10} style={{ marginTop: "20px" }}>
                <Col span={12}>
                  <TextArea
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

            <Col span={6}>
              <Row>
                <Col span={24}>
                  <DatePicker
                    onChange={this.changeDate}
                    placeholder="发布日期"
                  />
                  <Button
                    type="primary"
                    onClick={this.release}
                    style={{ marginLeft: "20px" }}
                  >
                    发布文章
                  </Button>
                </Col>
                <Col span={24}>
                  <TextArea
                    rows={4}
                    onChange={this.changeTextArea}
                    placeholder="文章简介"
                    style={{ marginTop: "20px" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Workbench;
