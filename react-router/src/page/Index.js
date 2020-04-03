import React, { Component } from 'react';
import { Link ,Redirect } from "react-router-dom";
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                { id: 1, title: '我是列表1' },
                { id: 2, title: '我是列表2' },
                { id: 3, title: '我是列表3' },
            ]
        }

        // this.props.history.push("/home/");  
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={'/list/' + item.id}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* <Redirect to="/home/" /> */}

            </div>
        );
    }
}

export default Index;