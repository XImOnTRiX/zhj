import React, { Component } from 'react';
import { fetchCollectionService } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import Collection from './collection';
import { GET_TOKEN, GET_URL } from '../../../config';

class Services extends Component{
  componentDidMount() {
    this.props.fetchCollectionService(`${GET_URL}/serviceCollection?token=${GET_TOKEN}`)
    console.log(this.props.data);
  }

  render(){
    const { data } = this.props;

    return(
      <div>
        <Collection data={data} />
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}
 export default connect(mapStateToProps, { fetchCollectionService })(Services);
