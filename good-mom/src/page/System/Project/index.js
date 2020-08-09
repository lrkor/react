import React, { Component } from "react";

import "./index.scss";

import add from "../../../assets/system/add.jpg";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          img: "http://chq.lihail.cn/mamahao159695137079317.png",
          title: "title",
          describe: "describe",
        },
      ],
    };
  }

  componentWillMount() {
    const obj = {
      img: add,
      title: "默认添加项目",
    };
    let list = this.state.list;
    list.push(obj);
    this.setState({ list });
  }

  render() {
    return (
      <div className="system-project">
        <div className="system-project-list">
          {this.state.list.map((item) => {
            return (
              <div className="system-project-list-item" key={item}>
                <div className="top">
                  <img src={item.img} alt="图片"/>
                </div>
                <div className="title">{item.title}</div>
                <div className="describe">{item.describe}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default index;
