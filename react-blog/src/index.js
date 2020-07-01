import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/index'
// import Routers from './router/Routers'
import 'antd/dist/antd.css'
import './style/comm.css'
import api from './services/api';

React.$api = api;  // 全局调用接口请求


ReactDOM.render(<AppRouter/>,document.getElementById('root'))
