import React, { Component } from 'react';
import { connect } from 'react-redux';
/* fetchFeedBackcollection -> TEST */
import { postFeedback, fetchFeebackCollection, postFeedbackTo } from '../../../redux/actions/actions';
/* TEST */
import { GET_URL, GET_TOKEN } from '../../../config';

class FeedBack extends Component{

  componentDidMount() {
    this.props.fetchFeebackCollection(`${GET_URL}/feedback?token=${GET_TOKEN}`);
    console.log(this.props);
  }
  render(){
    const test = {
      feedback: true,
      comment: '3'
    }
    return(
      <div onClick={() => this.props.postFeedbackTo(test)}>
        k
      </div>
    );
  }
}

function mapStateToProps({ post }) {
  return { post };
}
 export default connect(mapStateToProps, { postFeedback, fetchFeebackCollection, postFeedbackTo })(FeedBack);
