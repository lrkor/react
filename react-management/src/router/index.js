import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from '../page/index';
import '../style/comm.css'

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Index />
                {/* <div className="main">
                    <Switch>
                   
                    </Switch>
                </div> */}
            </Router>
        );
    }
}

export default AppRouter;