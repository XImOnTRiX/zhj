import React, { Component } from 'react';
import { gps } from '../../../config/geolocation';
import Services from '../../reusable/serviceCollection/index';

class TaxiPage extends Component {
  componentDidMount() {
    // gps();
  }

  render() {
    return (
      <div className="container-fullWidth">
        <Services />
      </div>
    );
  }
}

export default TaxiPage;
