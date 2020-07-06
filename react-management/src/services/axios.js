import axios from "axios";

// axios.defaults.baseURL = 'http://127.0.0.1:7001/';
axios.defaults.baseURL = 'http://47.93.16.138:7001/';
axios.defaults.headers = { "X-Requested-With": "XMLHttpRequest" };
// axios.defaults.timeout = 5000;
// 请求拦截
axios.interceptors.request.use(
  (config) => {
    const header = {
    };
    config.headers["Content-type"] = config.headers["Content-type"]
      ? config.headers["Content-type"]
      : "application/json";
    config.headers = Object.assign(config.headers, header);
    
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => Promise.reject(err.toString())
);
export default {
  get(param, option) {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url: param.url,
        params: param.data ? param.data : {},
        ...option,
        headers: param.headers ? param.headers : {},
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(param, option = {}) {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url: param.url,
        data: param.data || {},
        ...option,
        headers: param.headers ? param.headers : {},
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
