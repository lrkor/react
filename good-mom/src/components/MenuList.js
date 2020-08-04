import React, { Component, Fragment } from "react";
import { Menu } from "antd";

const { SubMenu } = Menu;

export class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      defaultSelectedKeys: ["11"],
      defaultOpenKeys: ["1"],
      menuList: [
        {
          id: 1,
          name: "人员管理",
          children: [
            {
              id: 11,
              name: "人员列表1",
            },
            {
              id: 12,
              name: "人员列表2",
            },
            {
              id: 13,
              name: "人员列表3",
            },
          ],
        },
        {
          id: 2,
          name: "测试1",
          children: [
            {
              id: 21,
              name: "测试1",
            },
            {
              id: 22,
              name: "测试1",
            },
            {
              id: 23,
              name: "测试1",
            },
          ],
        },
        {
          id: 3,
          name: "测试2",
          children: [
            {
              id: 31,
              name: "测试2",
            },
            {
              id: 32,
              name: "测试2",
            },
            {
              id: 33,
              name: "测试2",
            },
          ],
        },
        {
          id: 4,
          name: "测试3",
          children: [
            {
              id: 41,
              name: "测试3",
            },
            {
              id: 42,
              name: "测试3",
            },
            {
              id: 43,
              name: "测试3",
            },
          ],
        },
      ],
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Fragment>
        <Menu
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultOpenKeys={this.state.defaultOpenKeys}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {this.state.menuList.map((item, index) => {
            if (item.children) {
              return (
                <SubMenu key={item.id} title={item.name}>
                  {item.children.map((item1, index1) => {
                    return <Menu.Item key={item1.id}>{item1.name}</Menu.Item>;
                  })}
                </SubMenu>
              );
            } else {
              return <Menu.Item key={item.id}>{item.name}</Menu.Item>;
            }
          })}
        </Menu>
      </Fragment>
    );
  }
}

export default MenuList;
