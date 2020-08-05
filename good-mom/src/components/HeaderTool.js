import React, { Component, Fragment } from "react";

import "./style/headerTool.scss";

import { createFromIconfontCN } from "@ant-design/icons";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

export class HeaderTool extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  exit = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <Fragment>
        <div className="tool">
          <div className="tool-left">自动化测试</div>
          <div className="tool-right">
            <div className="name">超级管理员</div>
            <div className="exit" onClick={() => this.exit()}>
              <IconFont type="icon-tuichu" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HeaderTool;
