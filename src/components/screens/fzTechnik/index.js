import React, { Component } from 'react';
import { ServiceList } from './service';
import { ZahlungsModalitäten } from './zahlungen';
import { Svg } from './svg';
import GallerySection from '../../reusable/gallery';
import OurTeam from '../../reusable/team';
import Preorder from '../../reusable/preorder';

import SVG from '../../../media/grafiken/fz-technik.svg';

class FzTechnikPage extends Component {
  render() {
    return (
      <div className="container-fullWidth">
        <Svg />
        <ServiceList />
        <ZahlungsModalitäten />
        <GallerySection name="Fahrzeugtechnik"/>
        <OurTeam />
        <Preorder
          button="Kontakt" 
          title="Kontaktieren Sie uns"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy" time={false} />
      </div>
    );
  }
}

export default FzTechnikPage;
