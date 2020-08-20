import React, { Component } from "react";
import { Modal, Form, Input, Button } from "antd";

export class DialogUpdate extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      visible: false,
      module: "",
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
      module: "222",
      remark: "222",
    });
  };

  render() {
    return (
      <div className="dialog">
        <Modal
          title="新增分组"
          visible={this.state.visible}
          footer={null}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            name="basic"
            ref={this.formRef}
            initialValues={{
              module: this.state.module,
              remark: this.state.remark,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="分组模块："
              name="module"
              rules={[{ required: true, message: "请输入分组模块！" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="备注信息："
              name="remark"
              rules={[{ required: true, message: "请输入备注信息！" }]}
            >
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

export default DialogUpdate;
