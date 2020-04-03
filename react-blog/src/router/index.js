import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from '../component/Header'
import Routers from './Routers'



import '../style/comm.css'

function AppRouter() {
    return (
        <Fragment>
            <Router>
                <Header />
                <div className="main">
                    <Routers />
                </div>
            </Router>

        </Fragment>


    );
}
export default AppRouter;