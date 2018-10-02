import React, { Component } from 'react';
import { ServiceList } from './service';
import { ZahlungsModalitäten } from './zahlungen';
import { Svg } from './svg';

import SVG from '../../../media/grafiken/fz-technik.svg';

class FzTechnikPage extends Component {
  render() {
    return (
      <div className="container-fullWidth">
        <Svg />
        <ServiceList />
        <ZahlungsModalitäten />
      </div>
    );
  }
}

export default FzTechnikPage;
