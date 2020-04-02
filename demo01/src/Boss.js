import React, { Component, Fragment } from 'react';

import './style.css'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
        }

        this.toToggole = this.toToggole.bind(this);
    }
    render() {
        return (
            <Fragment>
                <div className={this.state.isShow ? 'show' : 'hide'}>BOSS级人物-孙悟空</div>
                <div><button onClick={this.toToggole}>召唤Boss</button></div>
                <div></div>
            </Fragment>
        );
    }

    toToggole() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}

export default Boss;