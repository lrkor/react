import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

//默认数据
const defaultStare = {
    inputValue: 'Write Something',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
};

//就是一个方法函数
export default (state = defaultStare, action) => {

    // 判断action类型
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.inputValue = action.value;
        console.log(newState);
        return newState;
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.list.push(newState.inputValue);  //push新的内容到列表中去
        newState.inputValue = '';
        console.log(newState);
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.list.splice(action.index,1);  //push新的内容到列表中去
        return newState;
    }
    return state;
}