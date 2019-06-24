import React, {Component} from 'react';
import PropTypes from 'prop-types'

class XJJItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return(
            <div>
                <li onClick={this.handleClick}>
                    {this.props.name}为你服务--{this.props.content}
                </li>
            </div>
        )
    }

    handleClick(){
        // console.log(this.props.index);
        this.props.delItem(this.props.index);
    }
}

XJJItem.propTypes = {
    name:PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    delItem: PropTypes.func,

};

XJJItem.defaultProps = {
    name:'小姐姐'
};

export default XJJItem;