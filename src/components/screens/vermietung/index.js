import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../reusable/header';

import CarCard from './card';
import Preorder from '../../reusable/preorder';

import BgImage from '../../../media/images/bgCar1.jpg';

class AutovermietungPage extends Component {
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
          <title>Autovermietung - ZHJ</title>
          <meta
            name="description"
            content="Sie möchten in den Urlaub fahren haben eine längere Dienstreise oder müssen etwas ausliefern? Haben aber kein passendes Fahrzeug dazu? Lassen Sie sich von uns Helfen. Hier finden Sie Kostengünstige Fahrzeuge zum Mieten."
          />
          <meta name="subject" content="Autovermietung" />

          <meta name="og:title" content="ZHJ | Autovermietung" />
          <meta name="og:type" content="Website" />
          <meta name="og:url" content="https://www.zhj.at/autovermietung" />
          <meta name="og:image" content="https://www.zhj.at/xyz" />
          <meta name="og:site_name" content="Autovermietung - ZHJ" />
          <meta
            name="og:description"
            content="Sie möchten in den Urlaub fahren haben eine längere Dienstreise oder müssen etwas ausliefern? Haben aber kein passendes Fahrzeug dazu? Lassen Sie sich von uns Helfen. Hier finden Sie Kostengünstige Fahrzeuge zum Mieten."
          />

          <link rel="canonical" href="https://www.zhj.at/autovermietung" />
        </Helmet>

        <Header image={BgImage}>
          <h1 className="light align-center">
            ZHJ - Zitzenbacher Herbert jun. <br />
            unbürokratische Autovermietung
          </h1>
          <p className="container-middle align-center">
            Egal ob Sie in den Urlaub fahren oder eine längere Dienstreise
            planen, bei uns finden Sie passende und kostengünstige
            Mietfahrzeuge. <br />
            Überzeugen Sie sich selbst!
          </p>
        </Header>

        <div className="container">
          <h4>Aktuelle Angebote</h4>
        </div>
        <CarCard />

        <Preorder
          button="T 04262 / 27 380"
          button2="office@zhj-fahrzeugtechnik.at"
          title="Kontaktieren Sie uns"
          text="Für weitere Fragen, Beratung und/oder mehr Informationen zu den Angeboten steht Ihnen das Team von ZHJ gerne zur Verfügung."
          time={false}
        />
      </div>
    );
  }
}

export default AutovermietungPage;
