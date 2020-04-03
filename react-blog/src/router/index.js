import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Web from '../page/Web'
import Header from '../component/Header'

import '../style/comm.css'

function AppRouter() {
    return (
        <Fragment>
            <Header />
            <div className="main">
                <Router>
                    <Route path="/" exact component={Web} />
                </Router>
            </div>

        </Fragment>


    );
}
export default AppRouter;