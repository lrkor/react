import React, { Component ,Fragment} from 'react';

class WebDetail extends Component {
    state = { 
        detail:{}
     }


    componentWillMount() {
        console.log(this.props.match.params.id)
        const id = this.props.match.params.id;
        React.$api.default.getArticleById({id}).then((res) => {
          let detail = res.data[0];
          this.setState({ detail });
        });
      }

    render() { 
        return ( 
            <Fragment>
                <div className="web-detail">
                    {this.state.detail.introduce}
                </div>
            </Fragment>    
         );
    }
}
 
export default WebDetail;