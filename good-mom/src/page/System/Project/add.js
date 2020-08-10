import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./style/add.scss";

export class add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="system-project-add">新增项目</div>;
  }
}

// export default add;
export default withRouter(add);
