import React, { Fragment } from "react";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Header from '../component/Header'

import WebList from '../page/web/List'
import WebDetail from '../page/web/detail'

import BookList from '../page/book/List'

import LifeList from '../page/life/List'



import '../style/comm.css'

function AppRouter() {
    return (
        <Fragment>
            <Header />
            <div className="main">
                <Router>
                    <Switch>
                        <Route path="/" exact component={WebList} />
                        <Route path="/web/detail/:id" component={WebDetail} />

                        <Route path="/book/list/" component={BookList} />

                        <Route path="/life/list/" component={LifeList} />
                    </Switch>

                </Router>
            </div>

        </Fragment>


    );
}
export default AppRouter;