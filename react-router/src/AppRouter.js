import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './page/Index'
import List from './page/List'
import Home from './page/Home'
import Video from './page/video/Video'
import WorkPlace from './page/workPlace/WorkPlace'

// function Index() {
//     return <h2>Hello World</h2>;
// }

// function List() {
//     return <h2>List-Page</h2>;
// }

function AppRouter() {
    return (
        // <Router>
        //     <ul>
        //         {/* <li><Link to="/">首页</Link></li> */}
        //         {/* <li><Link to="/list/123">列表</Link> </li> */}
        //     </ul>
        //     <Route path="/" exact component={Index} />
        //     <Route path="/list/:id" component={List} />
        //     <Route path="/home/" component={Home} />
        // </Router>
        <Router>
            <div className="main-div">
                <div className="left-nav">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/video/">视频教程</Link></li>
                        <li><Link to="/Workplace/">职场技能</Link></li>
                    </ul>
                </div>
            </div>
            <div className="right-main">
                <Route path="/" exact component={Index} />
                <Route path="/video/" component={Video} />
                <Route path="/Workplace/" component={WorkPlace} />
            </div>
        </Router>

    );
}
export default AppRouter;