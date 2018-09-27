import React, { Component } from 'react';
import Services from '../../reusable/serviceCollection/index';

class TaxiPage extends Component {
  render() {
    return (
      <div className="container-fullWidth">
        <h2 className="light container-big">Unsere <span className="medium">Leistungen</span> für Sie</h2>
        <Services />
      </div>
    );
  }
}

export default TaxiPage;
