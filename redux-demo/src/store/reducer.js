import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM ,GET_LIST} from './actionTypes'

//默认数据
const defaultStare = {
    inputValue: 'Write Something',
    list: []
};

//就是一个方法函数
export default (state = defaultStare, action) => {

    // 判断action类型
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.list.push(newState.inputValue);  //push新的内容到列表中去
        // newState.inputValue = '';
        console.log('+++++++', newState);
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
        newState.list.splice(action.index, 1);  //push新的内容到列表中去
        return newState;
    }

    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state));
        console.log(action.list,'595555555555');
        newState.list = action.list //复制性的List数组进去
        return newState
    }

    return state;
}