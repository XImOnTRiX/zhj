import React, { Component } from 'react';
import { fetch } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import ScrollBox from './scrollBox';
import { GET_TOKEN_SINGLETONS, GET_URL_SINGLETONS } from '../../../config';

class ScrollBoxContainer extends Component{
  componentDidMount() {
    this.props.fetch('fetch_scrollbox', `${GET_URL_SINGLETONS}/FzService?token=${GET_TOKEN_SINGLETONS}`)
    console.log(this.props.data);
  }

  render(){
    return(
      <div>
        <ScrollBox data={this.props.data}/>
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}
 export default connect(mapStateToProps, { fetch })(ScrollBoxContainer);
