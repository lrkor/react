import React, { Component, Fragment } from 'react';
import axios from 'axios'
import { Button } from 'antd';
import XJJItem from './XJJItem'
import './style.css'

class Xjj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intVal: '',
            list: ['基础按摩', '精油推背']
        }
    }

    //刷新时执行一次
    componentWillMount() {
        console.log('componentWillMount----组件将要挂载到页面的时刻');
    }

    //刷新时执行一次
    componentDidMount() {
        console.log('componentDidMount----组件挂载完成的时刻执行');
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda').then(res=>{
            console.log('axios 获取数据成功:'+JSON.stringify(res));
        }).catch((error)=>{
            console.log('axios 获取数据失败'+error)
        })
    }

    //就是返回true，就同意组件更新;返回false,就反对组件更新。
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate---组件发生改变前执行');
        return true;
    }

    //shouldComponentUpdate返回true才会被执行。
    componentWillUpdate() {
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    //state和props变化就会执行
    render() {
        console.log('render---组件挂载中.......')

        return (
            <Fragment>
                <div>
                    <label htmlFor="go">增加服务：</label>
                    <input id="go"
                        className="input"
                        type="text"
                        value={this.state.intVal}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => this.input = input} />
                    <Button className="btn" onClick={this.addList.bind(this)}>增加服务</Button>
                    <ul ref={(ul) => { this.ul = ul }}>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <XJJItem
                                        key={index + item}
                                        content={item}
                                        index={index}
                                        delItem={this.delItem.bind(this)}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }

    inputChange(e) {
        // console.log(e.target.value);
        // this.state.intVal = e.target.value
        console.log(this.input.value);

        let intVal = this.input.value;
        this.setState({ intVal })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.intVal],
            intVal: ''
        }, () => {
            console.log(this.ul.querySelectorAll('div').length);
        })
    }

    delItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({ list })

    }
}

export default Xjj;