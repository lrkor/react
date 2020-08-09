import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu } = Menu;

export class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultOpenKeys: ["/management/system"],
      defaultSelectedKeys: ["/management/system/project"],
      firstHide: true, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
      menuList: [
        {
          name: "系统首页",
          path: "/management/system",
          children: [
            {
              name: "项目管理",
              path: "/management/system/project",
            },
            {
              name: "公共接口",
              path: "/management/system/interface",
            },
            {
              name: "计划管理",
              path: "/management/system/plan",
            },
          ],
        },
        {
          name: "人员管理",
          path: "/management/user",
          children: [
            {
              name: "人员列表",
              path: "/management/user/list",
            },
            {
              name: "权限管理",
              path: "/management/user/permission",
            },
          ],
        },
      ],
    };
  }

  UNSAFE_componentWillMount() {
    let pathname = this.props.history.location.pathname;
    console.log(pathname);
    const openKeys = "/management/" + pathname.split("/")[2];
    this.setState({
      defaultOpenKeys: [openKeys],
      defaultSelectedKeys: [pathname],
    });
  }

  render() {
    return (
      <Fragment>
        <Menu
          defaultOpenKeys={this.state.defaultOpenKeys}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          mode="inline"
          theme="dark"
        >
          {this.state.menuList.map((item) => {
            if (item.children) {
              return (
                <SubMenu key={item.path} title={item.name}>
                  {item.children.map((item1) => {
                    return (
                      <Menu.Item key={item1.path}>
                        <Link to={item1.path}>{item1.name}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            } else {
              return <Menu.Item key={item.path}>{item.name}</Menu.Item>;
            }
          })}
        </Menu>
      </Fragment>
    );
  }
}

export default MenuList;
