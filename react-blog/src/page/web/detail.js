import React, { Component, Fragment } from "react";
import marked from "marked";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  pedantic: false,
  sanitize: false,
  tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
});

class WebDetail extends Component {
  state = {
    html: "",
  };

  componentWillMount() {
    const id = this.props.match.params.id;
    React.$api.default.detail({ id }).then((res) => {
      let html = marked(res.data[0].content);
      this.setState({ html });
      this.updateCount(id, res.data[0].count + 1);
    });
  }

  updateCount(id, count) {
    React.$api.default.updateCount({ id, count }).then(() => {});
  }

  render() {
    return (
      <Fragment>
        <div
          className="web-detail"
          dangerouslySetInnerHTML={{ __html: this.state.html }}
        >
          {/* {this.state.detail.content} */}
        </div>
      </Fragment>
    );
  }
}

export default WebDetail;
