import React, { Component } from 'react';
import ContentEditable from './contentEditable';
import { connect } from 'react-redux';
import { determine } from '../../../redux/actions/actions';
// import { GET_URL, GET_TOKEN, MASTER_KEY, SAVE_URL } from '../../../config';

class Comment extends Component {
  state = {
    html: "",
  }

  handleChange = (e) => {
    this.setState({html: e.target.value}, () => {  console.log(this.state.html); });
    this.props.determine('save_contenteditable', this.state.html)
  };

  render() {
    return (
      <div className="comment">
        <p className="white">Schreibe einen Kommentar</p>
        <ContentEditable html={this.state.html} onChange={this.handleChange} />
      </div>
    );
  }
}

function mapStateToProps({ save }) {
  return { save };
}

export default connect(mapStateToProps, { determine })(Comment);
