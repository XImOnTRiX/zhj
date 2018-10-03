import React, { Component } from 'react';
import { fetch } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import Team from './team';
import { GET_TOKEN, GET_URL } from '../../../config';

class OurTeam extends Component{
  componentDidMount() {
    this.props.fetch('fetch_team', `${GET_URL}/team?token=${GET_TOKEN}`)
    console.log(this.props.data);
  }

  render(){
    const { data } = this.props;

    return(
        <div>
          <div className="row">
            <div className="collg-1"></div>
            <div className="column">
              <h2 className="light pleft">Unser <span className="medium">Team</span></h2>
            </div>
          </div>
          <div>
            <Team data={data} />
          </div>
        </div>
    );
  }
}

function mapStateToProps({ data }) {
  return { data };
}
 export default connect(mapStateToProps, { fetch })(OurTeam);
