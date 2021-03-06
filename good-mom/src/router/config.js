// 路由导入  路由文件配置
import Login from "../page/Login/index";
import index from "./index";

import Interface from "../page/System/Interface";
import Plan from "../page/System/Plan";

import Project from "../page/System/Project";
import ProjectAdd from "../page/System/Project/add";
import Group from "../page/System/Group";
import InterfaceList from "../page/System/Group/interfaceList";

import Permission from "../page/User/Permission";
import UserList from "../page/User/List";

const routes = [
  {
    path: "/",
    component: Login,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/management",
    component: index,
    auth: true,
    routes: [
      {
        path: "/management/system/project",
        component: Project,
        exact: true,
        auth: true,
      },
      {
        path: "/management/system/projectAdd",
        component: ProjectAdd,
        exact: true,
        auth: true,
      },
      {
        path: "/management/system/projectGroup",
        component: Group,
        exact: true,
        auth: true,
      },
      {
        path: "/management/system/projectInterfaceList",
        component: InterfaceList,
        exact: true,
        auth: true,
      },
      {
        path: "/management/system/interface",
        component: Interface,
        exact: true,
        auth: true,
      },
      {
        path: "/management/system/plan",
        component: Plan,
        exact: true,
        auth: true,
      },
      {
        path: "/management/user/list",
        component: UserList,
        exact: true,
        auth: true,
      },
      {
        path: "/management/user/permission",
        component: Permission,
        exact: true,
        auth: true,
      },
    ],
  },
];

export default routes;
