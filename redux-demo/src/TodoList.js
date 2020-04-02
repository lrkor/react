import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css'
// import { Input, Button, List } from 'antd'
import axios from 'axios'
import store from './store'
import TodoListUI from './view/TodoListUI'
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'
import { changeInputAction, addItem, delItems, getListAction } from './store/actionCreators'

class TodoList extends Component {

    constructor(porps) {
        super(porps);
        this.state = store.getState();
        console.log(store.getState());
        this.changeInputValue = this.changeInputValue.bind(this);
        this.delItem = this.delItem.bind(this);
        this.click = this.click.bind(this);
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
    }

    componentDidMount() {
        axios.get('/static/demo.json').then((res) => {
            const list = [...res.data.data.list];
            // const val = res.data.data.val;
            const action = getListAction(list)
            store.dispatch(action)
        })
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                click={this.click}
                delItem={this.delItem}
            />
            // <Fragment>
            //     <div style={{margin:'10px'}}>
            //         <Input
            //             placeholder={this.state.inputValue}
            //             style={{ width: '250px' }}
            //             onChange={this.changeInputValue} />
            //         <Button type="primary" onClick={this.click}>增加</Button>
            //     </div>
            //     <div style={{ margin: '10px', width: '300px' }}>
            //         <List
            //             bordered
            //             dataSource={this.state.list}
            //             renderItem={(item, index) => (
            //                 <List.Item onClick={this.delItem.bind(this, index)}>{item}</List.Item>
            //             )}
            //         />
            //     </div>
            // </Fragment>
        );
    }
    changeInputValue(e) {
        console.log(e.target.value);

        // 创建action对象
        // const action = {
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // }

        const action = changeInputAction(e.target.value);

        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    click() {
        // 创建action对象
        // const action = {
        //     type: ADD_ITEM,
        // }

        console.log('-------');

        const action = addItem();
        store.dispatch(action)
    }

    delItem(index) {
        // const action = {
        //     type: DELETE_ITEM,
        //     index: index
        // }
        console.log(index);

        const action = delItems(index);
        store.dispatch(action)
    }
}
export default TodoList;