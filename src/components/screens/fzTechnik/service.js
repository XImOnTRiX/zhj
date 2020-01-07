import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import ScrollBoxContainer from '../../reusable/scrollBox/index';
import { FlatCard } from '../../reusable/flatCard';

import UpdateParallax from './parallaxUpdate';

import MyImage from '../../../media/images/fzimage.jpg';

import { fetch } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import { GET_TOKEN, GET_URL } from '../../../config';

export const ServiceList = (props) => (
  <div className="pb pt">
    <div className="row">
      <div className="collg-1"></div>
      <Fade bottom>
        <div className="column">
          <h3 className="light regular pleft pRight">Einige unserer Leistungen auf einem Blick</h3>
        </div>
      </Fade>
    </div>
    <div className="row">
    <div className="collg-1"></div>
      <div className="column colmd-6 collg-4">
        <Fade bottom>
          <p className="p">
            Eine Liste einiger unserer Angebote / Leistungen von A - Z die wir Anbieten. Von Achsvermessung über Dellen Reparatur und Gratis Leihwagen bis hin zu Pannenhilfe ist alles dabei.
          </p>
        </Fade>
        <Fade bottom>
          <ScrollBoxContainer />
        </Fade>
      </div>
      <UpdateParallax y={['-20', '20']}>
        <img alt="deko" className="br" src={MyImage} />
      </UpdateParallax>
      <div className="column colmd-5 collg-7 justify-center flex-align-center align-center">

        <h2 className="light italic">
          "Autoreparatur ist <span className="medium">Vertrauen</span>ssache"
        </h2>
      </div>
    </div>
  </div>
);

class MainServices extends Component {
  componentDidMount() {
    if(!this.props.loaded.fzService) {
      this.props.fetch('fetch_service', `${GET_URL}/fzservices?token=${GET_TOKEN}`)
    }
  }

  renderHelper = () => {
    if(this.props.loaded.fzService) {
      return (
        this.props.data.mainServices.entries.map((data, i) => {
          return (
            <Fade key={i} bottom>
              <div className="colmd-4">
                <FlatCard data={data} />
              </div>
            </Fade>
          );
        })
      )
    }
  }

  render() {
    return (
      <div className="container-big row pb">
        {this.renderHelper()}
      </div>
    );
  }
}

function mapStateToProps({ data, loaded }) {
  return { data, loaded };
}
 export default connect(mapStateToProps, { fetch })(MainServices);
