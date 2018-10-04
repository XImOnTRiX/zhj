import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post, fetch } from '../../../redux/actions/actions';
import { GET_URL, GET_TOKEN, MASTER_KEY, SAVE_URL } from '../../../config';
import { Rating } from './rating';
import { Comment } from './comment';

class PopUp extends Component{
  // componentDidMount() {
  //   this.props.fetch('fetch_feedback', `${GET_URL}/feedback?token=${GET_TOKEN}`);
  //   console.log(this.props);
  // }
  render(){
    const data = {
      rating: true,
      comment: '3'
    }
    const url = `${SAVE_URL}/feedback?token=${MASTER_KEY}`

    return(
      <div className="feedback">
        <h5 className="light">Berwertung</h5>
        <Rating />
        <Comment />
        <button className="feedback-form">Senden</button>
      </div>
    );
  }
}

function mapStateToProps({ post }) {
  return { post };
}
 export default connect(mapStateToProps, { post, fetch })(PopUp);
