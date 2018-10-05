import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post, fetch } from '../../../redux/actions/actions';
import { GET_URL, GET_TOKEN, MASTER_KEY, SAVE_URL } from '../../../config';
import { Rating } from './rating';
import Comment from './comment';

class PopUp extends Component{
  render(){
    const url = `${SAVE_URL}/feedback?token=${MASTER_KEY}`

    return(
      <div className="feedback">
        <h5 className="light">Berwertung</h5>
        <Rating />
        <Comment />
        <button
          onClick={() => this.props.post(this.props.feedback, url)}
          className="feedback-form"
        >
          Senden
        </button>

      </div>
    );
  }
}

function mapStateToProps({ post, feedback }) {
  return { post, feedback };
}
 export default connect(mapStateToProps, { post, fetch })(PopUp);
