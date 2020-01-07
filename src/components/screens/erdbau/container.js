import React, { Component } from 'react';

import { fetch } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import { GET_TOKEN, GET_URL } from '../../../config';
import Fade from 'react-reveal/Fade';

import SliderStyle from '../../reusable/slider';

class Container extends Component {
  componentDidMount() {
    if(!this.props.loaded.minibagger) {
      this.props.fetch('fetch_bagger', `${GET_URL}/minibagger?token=${GET_TOKEN}`)
    }
  }

  renderHelper = (data) => {
    console.log(data);
    if(this.props.loaded.bagger) {
      return <SliderStyle use={data}/>
    }
  }

  render() {
    const { bagger } = this.props.data;

    return (
      <div className="container-full pt">
        <div className="row">
          <div className="colmd-12 colxl-4">
            <Fade bottom>
              <h2 className="align-right light container nopr">
                Unser Mini<span className="medium">bagger</span>verleih für Sie
              </h2>
            </Fade>
          </div>
          <Fade bottom>
            <div className="colmd-12 colxl-8">
              {this.renderHelper(bagger)}
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ data, loaded }) {
  return { data, loaded };
}
 export default connect(mapStateToProps, { fetch })(Container);
