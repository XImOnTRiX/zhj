import React, { Component } from 'react';
import { fetchCollectionService } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import Collection from './collection';
import { GET_TOKEN, GET_URL } from '../../../config';

class Services extends Component{
  componentDidMount() {
    this.props.fetchCollectionService(`${GET_URL}/taxi?token=${GET_TOKEN}`)
    console.log(this.props.data);
  }

  render(){
    return(
      <div>
        <Collection data={this.props.data}/>
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}
 export default connect(mapStateToProps, { fetchCollectionService })(Services);
