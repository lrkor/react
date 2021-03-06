import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./style/add.scss";

import { Form, Input, Button, Upload, message, Select } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

export class add extends Component {
 

  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      loading: false,
    };
  }

  onFinish = (values) => {
    console.log("Success:", values);
    // console.log(this.props)
    this.props.history.goBack();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };
  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <div className="system-project-add">
        <div className="form-body">
          <Form
            {...layout}
            name="basic"
            ref={this.formRef}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item label="项目图片：" name="img">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
            <Form.Item
              label="项目名称："
              name="name"
              rules={[{ required: true, message: "请输入项目名称！" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="项目描述："
              name="describe"
              rules={[{ required: true, message: "请输入项目描述！" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item label="项目环境：" name="environment">
              <Select
                onChange={this.handleChange}
                placeholder="非必填"
                size="large"
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>

            <Form.Item label="其他环境1：" name="environment1">
              <Select
                onChange={this.handleChange}
                placeholder="非必填"
                size="large"
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>

            <Form.Item label="其他环境2：" name="environment2">
              <Select
                onChange={this.handleChange}
                placeholder="非必填"
                size="large"
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button htmlType="button" onClick={this.onReset}>
                重置
              </Button>
              <Button type="primary" htmlType="submit">
                立即创建
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(add);
