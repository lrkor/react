import React, { Component, Fragment } from "react";
import { List } from "antd";
import { Link } from "react-router-dom";
import "../../style/page/web/list.css";

class LifeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    React.$api.default.list({type:'2'}).then((res) => {
      let data = res.data;
      this.setState({ data });
    });
  }
  render() {
    return (
      <Fragment>
        <List
          dataSource={this.state.data}
          renderItem={(item, index) => {
            return (
              <List.Item>
                <div className="web-item">
                  <div className="web-item-title">
                    <Link to={{pathname:`/web/detail/${item.id}`}}>{item.title}</Link>
                  </div>
                  <div className="web-item-content">{item.introduce}</div>
                  <div className="web-item-footer">
                    <div className="web-item-footer-time">{item.time}</div>
                    <div className="web-item-footer-number">
                      {item.count}人查看
                    </div>
                  </div>
                </div>
              </List.Item>
            );
          }}
        />
      </Fragment>
    );
  }
}

export default LifeList;
