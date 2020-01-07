import React, { Component } from 'react';
import { fetch } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import Team from './team';
import { GET_TOKEN, GET_URL } from '../../../config';

import Fade from 'react-reveal/Fade';

class OurTeam extends Component{
  componentDidMount() {
    this.props.fetch('fetch_team', `${GET_URL}/team?token=${GET_TOKEN}`)
  }

  render(){
    const { data } = this.props;
    return(
      <div className="pt pb container-big">
        <Fade bottom>
          <h2 className="light align-left container-big align-center">Unser <span className="medium">Team</span></h2>
        </Fade>
        <Team data={data} />
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}
 export default connect(mapStateToProps, { fetch })(OurTeam);
