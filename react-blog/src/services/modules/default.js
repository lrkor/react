import axios from "../axios";

export default {
  // 搜索列表
  list: (query) =>
    axios.post({
      url: "/default/list",
      data: query,
    }),
    detail: (query) =>
    axios.get({
      url: "/default/detail",
      data: query,
    }),
};
