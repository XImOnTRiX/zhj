import React, { Component } from 'react';
import { fetch } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import Team from './team';
import { GET_TOKEN, GET_URL } from '../../../config';

class OurTeam extends Component{
  componentDidMount() {
    this.props.fetch('fetch_team', `${GET_URL}/team?token=${GET_TOKEN}`)
  }

  render(){
    const { data } = this.props;

    return(
      <div className="section-padding container-big">
        <h2 className="light align-left">Unser <span className="medium">Team</span></h2>
        <Team data={data} />
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}
 export default connect(mapStateToProps, { fetch })(OurTeam);
