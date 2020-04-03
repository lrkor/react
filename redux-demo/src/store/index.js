// 引入createStore方法
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reduxcer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

// 创建数据存储仓库
const store = createStore(reduxcer, enhancer);

export default store;