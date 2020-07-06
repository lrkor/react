import axios from "../axios";

export default {
  // 搜索列表
  getArticleList: (query) =>
    axios.get({
      url: "/default/getArticleList",
      data: query,
    }),
    getArticleById: (query) =>
    axios.get({
      url: "/default/getArticleById",
      data: query,
    }),
};
