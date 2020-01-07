import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../../../redux/actions/actions';
import { GET_TOKEN, GET_URL } from '../../../config';
import {IMAGE_PATH} from '../../../config';
import Fade from 'react-reveal/Fade';

class CarCard extends Component {
  componentDidMount() {
    if(!this.props.loaded.cars) {
      this.props.fetch('fetch_cars', `${GET_URL}/autovermietung?token=${GET_TOKEN}`)
    }
  }

  renderHelper = (data, category) => {
    if(this.props.loaded.cars) {
      return data.entries.map((data, i) => {
        if(data.type === category) {
          return (
            <Car key={i} pos={i} data={data} html={this.state} />
          )
        } else { return null }
      })
    } else {
      console.log('nop');
      return;
    }
  }

  render() {
    const { cars } = this.props.data;
    console.log(cars);
    return (
      <div className="container row nop">
        <div className="container"><h6 className="big">Busse</h6></div>
        {this.renderHelper(cars, "Busse")}
        <div className="container"><h6 className="big">Mittelklasse</h6></div>
        {this.renderHelper(cars, "Mittelklasse")}
        <div className="container"><h6 className="big">Kleinwagen</h6></div>
        {this.renderHelper(cars, "Kleinwagen")}
      </div>
    );
  }
}

function mapStateToProps({ data, loaded }) {
  return { data, loaded };
}
export default connect(mapStateToProps, { fetch })(CarCard);



export const Car = (props) => (
  <div className="colmd-12 nop ">
    <div className="row pt pb">
      <Fade bottom>
        <div className="colmd-6">
          <img className="shadow" src={IMAGE_PATH + props.data.image.path} />
        </div>
      </Fade>
      <Fade bottom>
        <div className="colmd-6">
          {/* <p>{props.data.active ? <span className="yes"> verfügbar </span> : <span className="no"> nicht verfügbar </span>}</p> */}
          <h6 className="big light bb spb">{props.data.title}</h6>
          <div className="sspt">
            <p><span className="bold">Marke: </span>{props.data.marke === undefined ? 'n.A' : props.data.marke}</p>
            <p><span className="bold">Model: </span>{props.data.model === undefined ? 'n.A' : props.data.model}</p>
            <p><span className="bold">Sitze: </span>{props.data.sitze === undefined ? 'n.A' : props.data.sitze}</p>
            <p><span className="bold">Türen: </span>{props.data.tueren === undefined ? 'n.A' : props.data.tueren}</p>
          </div>
          <div className="sspt" dangerouslySetInnerHTML={{__html: props.data.description}}></div>
          <p className="sspt"><span className="bold">Preis: </span>{props.data.cash}</p>
        </div>
      </Fade>
    </div>
  </div>
);
