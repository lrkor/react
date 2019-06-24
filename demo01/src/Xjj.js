import React, {Component, Fragment} from 'react';

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

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="go">增加服务</label>
                    <input id="go" className="input" type="text" value={this.state.intVal}
                           onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <XJJItem
                                        key={index+item}
                                        // name='大姐姐'
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
        let intVal = e.target.value;
        this.setState({intVal})
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.intVal],
            intVal: ''
        })
    }

    delItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({list})
    }
}

export default Xjj;