import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post, fetch } from '../../../redux/actions/actions';
import { GET_URL, GET_TOKEN, MASTER_KEY, SAVE_URL } from '../../../config';

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

      </div>
    );
  }
}

function mapStateToProps({ post }) {
  return { post };
}
 export default connect(mapStateToProps, { post, fetch })(PopUp);
