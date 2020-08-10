import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./index.scss";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button, message } from "antd";

export class index extends Component {
  static propTypes = {};

  onFinish = (values) => {
    const { username, password } = values;
    if (username === "admin" && password === "123456") {
      message.success("登录成功");
      sessionStorage.setItem("auth", "222");
      this.props.history.push("/management/system/project");
    } else {
      message.error("用户名账号不正确");
    }
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div className="login">
        <div className="content">
          <div className="top">
            <div className="header">
              <img src={logo} alt="logo" className="logo" />
              <span className="title">GOOD MOM</span>
            </div>
            <div className="desc">
              Ant Design 是西湖区最具影响力的 Web 设计规范
            </div>
          </div>
          <div className="login-form">
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "请输入用户名!" }]}
              >
                <Input placeholder="用户名：" prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码！" }]}
              >
                <Input.Password
                  placeholder="密码："
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="footer">
          <div className="content">
            <div className="content-top">
              <div className="left">Ant Design</div>
              <div className="right">ProAnt Design</div>
            </div>
            <div className="content-down">
              Copyright 2019 蚂蚁金服体验技术部出品
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
