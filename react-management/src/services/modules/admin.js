import axios from "../axios";

export default {
  // 搜索列表
  add: (query) =>
    axios.post({
      url: "/admin/add",
      data: query,
    }),
  list: (query) =>
    axios.post({
      url: "/admin/list",
      data: query,
    }),
  delete: (query) =>
    axios.post({
      url: "/admin/delete",
      data: query,
    }),
  detail: (query) =>
    axios.get({
      url: "/admin/detail",
      data: query,
    }),
    update: (query) =>
    axios.post({
      url: "/admin/update",
      data: query,
    }),
};
