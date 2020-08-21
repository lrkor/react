import React, { Component } from "react";
import { Modal, Form, Input, Button, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

export class DialogAddInterface extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      visible: false,
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

  render() {
    return (
      <div className="dialog">
        <Modal
          title="新增接口管理内容"
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

            <Form.Item label="备注：" name="remake">
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
                新增
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default DialogAddInterface;
