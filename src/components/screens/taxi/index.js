import React, { Component } from 'react';
import Services from '../../reusable/serviceCollection/index';

class TaxiPage extends Component {
  render() {
    return (
      <div className="container-fullWidth">
        <div className="row">
          <div className="collg-1"></div>
          <div className="column">
            <h2 className="light pleft" className="heading">Unsere <span className="medium">Leistungen</span> für Sie</h2>
          </div>
        </div>
              <Services />
      </div>
    );
  }
}

export default TaxiPage;
