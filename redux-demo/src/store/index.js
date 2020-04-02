// 引入createStore方法
import { createStore } from 'redux'
import reduxcer from './reducer'

// 创建数据存储仓库
const store = createStore(reduxcer);

export default store;