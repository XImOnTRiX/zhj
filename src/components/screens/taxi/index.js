import React, { Component } from 'react';
import { gps } from '../../../config/geolocation';

class TaxiPage extends Component {
  componentDidMount() {
    gps();
  }

  render() {
    return (
      <div className="container-fullWidth">
        <h1 className="light">Unser <span className="medium">Service</span> für Sie</h1>
      </div>
    );
  }
}

export default TaxiPage;
