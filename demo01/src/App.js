import React,{Component} from 'react';

class App extends Component{
    render() {
        return (
            <ul className="my-list">
                <li>{false?'lrkor':'222'}</li>
                <li>love react</li>
            </ul>
        )
    }
}

export default App;