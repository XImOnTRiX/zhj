import React, { Component } from 'react';
import { ServiceList } from './service';
import { ZahlungsModalitäten } from './zahlungen';
import { Svg } from './svg';
import GallerySection from '../../reusable/gallery';

import SVG from '../../../media/grafiken/fz-technik.svg';

class FzTechnikPage extends Component {
  render() {
    return (
      <div className="container-fullWidth">
        <Svg />
        <ServiceList />
        <ZahlungsModalitäten />
        <GallerySection name="Fahrzeugtechnik"/>
      </div>
    );
  }
}

export default FzTechnikPage;
