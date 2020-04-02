//默认数据
const defaultStare = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
};

//就是一个方法函数
export default (state = defaultStare, action) => {
    return state ;
}