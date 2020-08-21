import React, { Component } from "react";
import { Modal, Form, Input, Button, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

export class DialogUpdateInterface extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      visible: false,
      id: "",
      name: "",
      address: "",
      request: "",
      remark: "",
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  onFinish = (values) => {
    console.log("Success:", values);
    this.formRef.current.resetFields();
    this.setState({
      visible: false,
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  onReset = () => {
    this.formRef.current.resetFields();
    this.setState({
      visible: false,
    });
  };

  //获取详情
  getDetail = (id) => {
    this.setState({
      id,
      name: "22",
      address: "22",
      request: "GET",
      remark: "22",
    });
  };

  render() {
    return (
      <div className="dialog">
        <Modal
          title="修改接口管理内容"
          visible={this.state.visible}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            {...layout}
            name="basic"
            ref={this.formRef}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            initialValues={{
              name: this.state.name,
              address: this.state.address,
              request: this.state.request,
              remark: this.state.remark,
            }}
          >
            <Form.Item
              label="接口名称："
              name="name"
              rules={[{ required: true, message: "请输入接口名称！" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="接口地址："
              name="address"
              rules={[{ required: true, message: "请输入接口地址！" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="请求方式："
              name="request"
              rules={[{ required: true, message: "请选择请求方式！" }]}
            >
              <Select
                size="large"
                // onChange={handleChange}
              >
                <Option value="GET">GET</Option>
                <Option value="POST">POST</Option>
              </Select>
            </Form.Item>

            <Form.Item label="备注：" name="remark">
              <Input size="large" />
            </Form.Item>

            <Form.Item style={{ textAlign: "right" }}>
              <Button
                htmlType="button"
                onClick={this.onReset}
                style={{ marginRight: "20px" }}
              >
                取消
              </Button>
              <Button type="primary" htmlType="submit">
                修改
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default DialogUpdateInterface;
