import React, { Component } from 'react';
import { fetch } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import Collection from './collection';
import { GET_TOKEN, GET_URL } from '../../../config';

class Services extends Component{
  componentDidMount() {
    this.props.fetch('fetch_collection', `${GET_URL}/serviceCollection?token=${GET_TOKEN}`)
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
 export default connect(mapStateToProps, { fetch })(Services);
