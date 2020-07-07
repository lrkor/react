import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../component/Header'
import WebList from '../page/web/List'
import WebDetail from '../page/web/detail'

import BookList from '../page/book/List'

import LifeList from '../page/life/List'


class AppRouter extends Component {
    render() {
        return (
            <Router basename="/blog">
                <Header />
                <div className="main">
                    <Switch>
                        <Route path="/" exact component={WebList} />
                        <Route path="/web/detail/:id" component={WebDetail} />

                        <Route path="/book/list/" component={BookList} />

                        <Route path="/life/list/" component={LifeList} />
                    </Switch>
                </div>


            </Router>
        );
    }
}

export default AppRouter;