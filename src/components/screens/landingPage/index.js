import React, { Component } from 'react';

import { Helmet } from 'react-helmet';

// import { NavLink } from 'react-router-dom';
// import { url } from '../../reusable/nav/url.js';

import Autovermietung from '../../../media/logos/autovermietung.png';
import Autohandel from '../../../media/logos/autohandel.png';
import Erdbau from '../../../media/logos/erdbau.png';
import Technik from '../../../media/logos/fzTechnik.png';
import Taxi from '../../../media/logos/Taxi.png';
import About from '../../../media/logos/about.png';

import BgImage from '../../../media/images/bgCar2.jpg';

import Header from '../../reusable/header';
import Preorder from '../../reusable/preorder';
import { Btn } from '../../reusable/btn';
import OurTeam from '../../reusable/team';
import GallerySection from '../../reusable/gallery';

import { NavLink } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

class LandingPage extends Component {
  componentDidMount() {
    console.log(window.location);
    if(this.props.history.action === "PUSH") {
      setTimeout(() => {
        window.scrollTo(0,1);
      },500)
    }
  }

  renderIcons = (iconArray) => {
    const url = ['/fahrzeugtechnik', '/autohandel', '/autovermietung', '/taxi', '/erdbau', '/über-uns',];
    return iconArray.map((data, i) => {
      return (
        <div key={i} className="colz-4 collg-2">
          <NavLink to={url[i]}>
            <img alt="" src={data} />
          </NavLink>
        </div>
      )
    })
  }

  scrolling = () => {
    window.scrollBy({ top: 700, left: 0, behavior: "smooth" });
  }

  render(){
    const iconArray = [Technik, Autohandel, Autovermietung, Taxi, Erdbau, About];

    return (
      <div className="smothscroll">
        <Helmet>
          <title>Home & Über uns - ZHJ</title>
          <meta
            name="description"
            content="Wir bieten eine vielzal an Dienstleistungen an. Wir führen ein Taxiunternehmen, haben einen KFZ-meisterbetrieb, verkaufen und vermieten Fahrzeuge, bieten Erdbauarbauarbeiten an und Minibaggerverleih."
          />
          <meta name="subject" content="Die Firma ZHJ" />

          <meta name="og:title" content="ZHJ | Home & Über uns" />
          <meta name="og:type" content="Website" />
          <meta name="og:url" content="https://www.zhj.at/" />
          <meta name="og:image" content="https://www.zhj.at/xyz" />
          <meta name="og:site_name" content="Home & Über uns - ZHJ" />
          <meta
            name="og:description"
            content="Wir bieten eine vielzal an Dienstleistungen an. Wir führen ein Taxiunternehmen, haben einen KFZ-meisterbetrieb, verkaufen und vermieten Fahrzeuge, bieten Erdbauarbauarbeiten an und Minibaggerverleih."
          />
          <link rel="canonical" href="https://www.zhj.at/" />
        </Helmet>

        <Header image={BgImage}>
          <h1 className="light align-center">
            ZHJ – Zitzenbacher Herbert jun. <br />
            Karosserie – Lack – Mechanik
          </h1>
          <p className="container-middle align-center">
            Als kompetenter und qualifizierter KFZ-Meisterbetrieb kümmern wir
            uns um Ihr Auto, verkaufen und vermieten Fahrzeuge, sind als
            Taxiunternehmen reglementiert, bieten Erdbauarbeiten an und
            verleihen Minibagger.
          </p>
          <div className="row justify-center container">
            <div onClick={this.scrolling} className="btn-border-rounded-full">
              <p className="align-center">mehr erfahren</p>
            </div>
          </div>
        </Header>

        <div id="finish" className="container-big row sp-icon-container">
          {this.renderIcons(iconArray)}
        </div>

        <div className="container-big pt">
          <Fade bottom>
            <h2 className="container-big align-center">Über ZHJ</h2>
          </Fade>
          <div className="row justify-center">
            <Fade bottom>
              <div className="colmd-6">
                <p className="align-center">
                  Die Liebe zum Fahrzeug beginnt meist in den Kinderschuhen. So
                  auch bei mir. Meine Ausbildungen zum KFZ-Techniker im Jahr
                  2001 sowie die weiteren Ausbildungen zum
                  Karosseriebautechniker und Lackierer waren geprägt davon.
                  <br />
                  <br />
                  Meine KFZ-Werkstätte mit vorerst Reparaturarbeiten startete in
                  einem kleinen angemieteten Gebäude in Treffling. In Feistritz
                  ob Grades wurde später expandiert und ein Miethaus samt
                  LKW-Garage bot Platz. <br />
                  <br />
                  2005 absolvierte ich erfolgreich den KFZ-Techiker Meister,
                  später den Karosseriebautechniker Meister, den Lackierer
                  Meister und den Landmaschinentechniker Meister.
                  <br />
                  <br />
                  2009 begann der Bau des KFZ-Meisterbetriebs in Mölbling-Ost 4.
                  Noch im selben Jahr wurde „ZHJ – Zitzenbacher Herbert jun. –
                  Fahrzeugtechnik Handels- und Dienstleistungs GesmbH“
                  gegründet!
                  <br />
                  <br />
                  2017 wurde die Werkstatt durch einen Zubau mit einer
                  Spenglerei und Lackiererei erweitert.
                  <br />
                  <br />
                  <span className="italic bold">
                    " AUTOREPARATUR IST VERTRAUENSSACHE! "
                  </span>
                  <br />
                  Herbert Zitzenbacher jun.
                </p>
              </div>
            </Fade>
          </div>
        </div>

        <OurTeam />

        <GallerySection name="Über uns" />

        <Preorder
          button="Kontakt"
          title="Kontaktieren Sie uns"
          text="Für weitere Fragen, Beratung und/oder mehr Informationen zu den Angeboten steht Ihnen das Team von ZHJ gerne zur Verfügung."
          time={false}
        />
      </div>
    );
  }
}

export default LandingPage;
