import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

import { ServiceList } from './service';
import { ZahlungsModalitaeten } from './zahlungen';
import { Svg } from './svg';
// import GallerySection from '../../reusable/gallery';
// import OurTeam from '../../reusable/team';
import Preorder from '../../reusable/preorder';
import MainServices from './service';
import AccContainer from './accordion';

import Logo1 from '../../../media/logos/leiste/karosserie-fachbetrieb.jpg';
import Logo2 from '../../../media/logos/leiste/kfz-meisterbetrieb.png';
import Logo3 from '../../../media/logos/leiste/prüfstelle.png';
import Logo4 from '../../../media/logos/leiste/meisterhaft.png';

class FzTechnikPage extends Component {
  state={
    width: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimension)
    if(this.props.history.action === "PUSH") {
      setTimeout(() => {
        window.scrollTo(0,1);
      },500)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimension)
  }

  updateDimension = () => {
    this.setState({
      width: window.innerWidth,
    })
  }

  toggleComponent = () => {
    if( this.state.width <= 768 ) {
      return (
        <div className="pt">
          <AccContainer />
        </div>
      )
    } else {
      return (
        <div>
          <Svg />
          <div className="logoleiste flexbox justify-center flex-align-center;">
            <div>
              <img src={Logo2} />
            </div>
            <div>
              <img src={Logo1} />
            </div>
            <div>
              <img src={Logo3} />
            </div>
            <div>
              <img src={Logo4} />
            </div>
          </div>
        </div>
      )
    }
  }



  render() {
    return (
      <div className="container-fullWidth">
        <Helmet>
          <title>Karosserie & Spenglerei - ZHJ</title>
          <meta
            name="description"
            content="Beim ZHJ KFZ-Meisterbetrieb finden Sie alles von Achsvermessung über Dellen Reparatur und Gratis Leihwagen bis hin zu Pannenhilfe und noch viel mehr"
          />
          <meta name="subject" content="Erdbau und Baggerverleih" />

          <meta name="og:title" content="ZHJ | Karosserie & Spenglerei" />
          <meta name="og:type" content="Website" />
          <meta name="og:url" content="https://www.zhj.at/fahrzeugtechnik" />
          <meta name="og:image" content="https://www.zhj.at/xyz" />
          <meta name="og:site_name" content="Karosserie & Spenglerei - ZHJ" />
          <meta
            name="og:description"
            content="Beim ZHJ KFZ-Meisterbetrieb finden Sie alles von Achsvermessung über Dellen Reparatur und Gratis Leihwagen bis hin zu Pannenhilfe und noch viel mehr"
          />

          <link rel="canonical" href="https://www.zhj.at/fahrzeugtechnik" />
        </Helmet>

        {this.toggleComponent()}

        <div className="container-big">
          <Fade bottom>
            <h1 className="light container-big align-center">
              ZHJ – Zitzenbacher Herbert jun. <br />
              Unsere <span className="medium">Leistungen</span> des
              KFZ-Meisterbetriebs in Mölbling.
            </h1>
          </Fade>
          <Fade bottom>
            <p className="container-middle align-center">
              Karosserieinstandsetzung, Lackierung und Reparatur aller Marken
              und Modelle! Egal ob PKW, LKW, SUV, Oldtimer oder Motorrad.
            </p>
          </Fade>
        </div>
        <MainServices />
        <ServiceList />
        <ZahlungsModalitaeten />
        {/* <GallerySection name="Fahrzeugtechnik"/> */}

        <Preorder
          button="Kontakt"
          title="Kontaktieren Sie uns"
          text="Für weitere Fragen, Beratung und/oder mehr Informationen zu den Angeboten steht Ihnen das Team von ZHJ gerne zur Verfügung. Wir freuen uns darauf eine Nachricht von Ihnen zu erhalten"
          time={false}
        />
      </div>
    );
  }
}

export default FzTechnikPage;
