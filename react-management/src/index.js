import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import AppRouter from './router/index';
import api from './services/api';

React.$api = api;  // 全局调用接口请求

ReactDOM.render(<AppRouter />, document.getElementById('root'));


