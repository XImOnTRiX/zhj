import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Preorder from '../../reusable/preorder';

import Header from '../../reusable/header';

import BgImage from '../../../media/images/bgcar.jpg';

class SpenglereiPage extends Component {
  componentDidMount() {
    if(this.props.history.action === "PUSH") {
      setTimeout(() => {
        window.scrollTo(0,1);
      },500)
    }
  }
  render() {
    return (
      <div className="container-fullWidth">
        <Helmet>
          <title>Karosserie & Spenglerei – ZHJ</title>
          <link rel="canonical" href="http://localhost:3000/spenglerei" />
        </Helmet>

        <Header image={BgImage}></Header>

        <div className="pt">
          <Preorder
            button="Kontakt"
            title="Kontaktieren Sie uns"
            text="Für weitere Fragen, Beratung und/oder mehr Informationen zu den Angeboten steht Ihnen das Team von ZHJ gerne zur Verfügung. Wir freuen uns darauf eine Nachricht von Ihnen zu erhalten"
            time={false}
          />
        </div>
      </div>
    );
  }
}

export default SpenglereiPage;
