import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// import { gps } from '../../../config/geolocation';
import FuhrparkSection from '../../reusable/gallery/index2.js';
import Preorder from '../../reusable/preorder';

import Header from '../../reusable/header';

import BgImage from '../../../media/images/tbg.jpg';

class TaxiPage extends Component {
  componentDidMount() {
    // gps();
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
          <title>Taxi - ZHJ</title>
          <meta
            name="description"
            content="Pünktlichkeit und Flexibilität begleiten uns jeden Tag. Daher hat sich unser Taxiunternehmen dazu verpflichtet, Sie sicher und zum vereinbarten Zeitpunkt zu befördern oder Ihre Produkte termingerecht ans Ziel zu bringen."
          />
          <meta name="subject" content="Taxi" />

          <meta name="og:title" content="ZHJ | Taxi" />
          <meta name="og:type" content="Website" />
          <meta name="og:url" content="https://www.zhj.at/taxi" />
          <meta name="og:image" content="https://www.zhj.at/xyz" />
          <meta name="og:site_name" content="Taxi - ZHJ" />
          <meta
            name="og:description"
            content="Pünktlichkeit und Flexibilität begleiten uns jeden Tag. Daher hat sich unser Taxiunternehmen dazu verpflichtet, Sie sicher und zum vereinbarten Zeitpunkt zu befördern oder Ihre Produkte termingerecht ans Ziel zu bringen."
          />

          <link rel="canonical" href="https://www.zhj.at/taxi" />
        </Helmet>

        <Header image={BgImage}>
          <h1 className="light container align-center">
            ZHJ – Zitzenbacher Herbert jun. <br />
            Taxiunternehmen in St. Veit
          </h1>
          <p className="container-middle align-center">
            Ihr Ansprechpartner für Taxifahren, Flughafentransfer und Botendienste. <br />
            <span className="medium">sicher – pünktlich – flexibel</span>
          </p>

          <a href="tel:04122612">
            <h1 className="medium align-center pt tertiary">
              T 042 12/26 12
            </h1>
          </a>
        </Header>

        {/* <FuhrparkSection name="Fahrzeugtechnik" /> */}

        <div className="pt">
          <Preorder
            button="T 04262 / 27 380"
            button2="office@zhj-fahrzeugtechnik.at"
            title="Kontaktieren Sie uns"
            text="Für weitere Fragen, Beratung und/oder mehr Informationen zu den Angeboten steht Ihnen das Team von ZHJ gerne zur Verfügung."
            time={false}
          />
        </div>
      </div>
    );
  }
}

export default TaxiPage;
