import React, { Component } from 'react';
import { ServiceList } from './service';
import { ZahlungsModalitäten } from './zahlungen';

class FzTechnikPage extends Component {

  render() {
    return (
      <div className="container-fullWidth">
        <ServiceList />
        <ZahlungsModalitäten />
      </div>
    );
  }
}

export default FzTechnikPage;
