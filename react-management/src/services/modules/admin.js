import axios from "../axios";

export default {
  // 搜索列表
  addArticle: (query) =>
    axios.post({
      url: "/admin/addArticle",
      data: query,
    }),
    list: (query) =>
    axios.post({
      url: "/admin/list",
      data: query,
    }),
};
