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
import { url } from "../../reusable/nav/url";

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
    window.scrollBy({ top: 950, left: 0, behavior: "smooth" });
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

        </Header>

        <div id="finish" className="container-big row sp-icon-container">
          <div className="colz-4 collg-2">
            <NavLink to={url[0]}>
              <img alt="" src={Technik} />
            </NavLink>
          </div>
          <div className="colz-4 collg-2">
            <NavLink to={url[1]}>
              <img alt="" src={Autohandel} />
            </NavLink>
          </div>
          <div className="colz-4 collg-2">
            <NavLink to={url[2]}>
              <img alt="" src={Autovermietung} />
            </NavLink>
          </div>
          <div className="colz-4 collg-2">
            <NavLink to={url[3]}>
              <img alt="" src={Taxi} />
            </NavLink>
          </div>
          <div className="colz-4 collg-2">
            <NavLink to={url[4]}>
              <img alt="" src={Erdbau} />
            </NavLink>
          </div>
          <div className="colz-4 collg-2">
            <img alt="" src={About} onClick={this.scrolling}/>
          </div>
        </div>

        <div className="container-big pt">
          <Fade bottom>
            <h2 className="container-big align-center">Über ZHJ</h2>
          </Fade>
          <div className="row justify-center">
            <Fade bottom>
              <div className="colmd-6">
                <p className="align-center">
                  Fahrzeuge faszinierten mich bereits im Kindesalter.
                  Mit viel Hingabe und Sorgfalt wurde jedes neue Matchbox Auto
                  bis ins kleinste Detail erforscht. Manchmal auch unter Zuhilfenahme
                  eines Hammers. Meine Mutter nannte mich damals liebevoll "Mec <span className="bold">HIN</span> iker".
                  <br />
                  <br />
                  Durch meine Lehre zum KFZ-Techniker (1997-2001, Autohaus Heinz Hofstätter)
                  sowie in weiterer Folge zum Karosseriebautechniker (2001-2003, Firma Karosserie Puck)
                  konnte ich meine Fertigkeiten zum Glück verfeinern.
                  <br />
                  <br />
                  2005 absolvierte ich erfolgreich den <span className="bold">KFZ-Techniker Meister</span>, darauf folgten
                  noch der <span className="bold">Karosseriebautechniker- und Landmaschinentechniker Meister</span>.
                  Im selben Jahr startete ich in die Selbstständigkeit.
                  <br />
                  <br />
                  Vorerst wurden Reparaturarbeiten in einem alten, angemieteten Stall in Treffling durchgeführt
                  <br />
                  <br />
                  Doch schon bald wurde der Platz zu klein und es verschlug mich, meine damalige Freundin
                  und heutige Frau Carmen, sowie unseren 2003 geborenen Sohn Lukas nach Feistritz ob Grades
                  wo wir ein Haus mit LKW-Garagen mieteten.
                  <br />
                  <br />
                  2007 wurde unsere Tochter Lena geboren.
                  <br />
                  <br />
                  Als auch das Haus in Feistritz ob Grades nicht mehr genug Platz bot, begannen wir
                  2009 mit dem Bau des KFZ-Meisterbetriebes am heutigen Standort in Mölbling-Ost 4.
                  Noch im selben Jahr wurde die ZHJ Fahrzeugtechnik Handels u Dienstleistungs GesmbH gegründet.
                  <br />
                  <br />
                  Im Jahr 2012 wurde unsere Tochter Lilli geborgen und machte unsere Familie komplett.
                  <br />
                  <br />
                  Das konnte man von unserem Standort nicht behaupten, denn 2017 wurde die Werkstatt
                  um einen 600 m² großen Zubau mit Spenglerei und Lackiererei erweitert und umfasst
                  mittlerweile 16 Hebebühnen.
                  <br />
                  <br />
                  Auf diesem Weg liebe Kunden, möchte ich Ihnen meinen Dank für Ihr Vertrauen aussprechen.
                  Ein Dankeschön gilt aber auch jedem unserer Mitarbeiter, die engagiert und
                  professionell mit uns ans Werk gehen.
                  <br />
                  <br />
                  Mein Slogan lautet:
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

export default LandingPage;
