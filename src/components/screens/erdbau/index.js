import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';

import FuhrparkSection from '../../reusable/gallery/index2.js';
import Preorder from '../../reusable/preorder';
import { FeedBack } from '../../reusable/feedback';
import Header from '../../reusable/header';
import WeDo from './wedo';
import Services from './services';

import Container from './container'


import BgImage from '../../../media/images/bgcar.jpg';

class ErdbauPage extends Component {
  state = {
    services: [
      {titel: 'Lorem Ipsum', text: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet', icon: {path: BgImage}},
      {titel: 'Lorem Ipsum', text: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet', icon: {path: BgImage}},
      {titel: 'Lorem Ipsum', text: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet', icon: {path: BgImage}},
      {titel: 'Lorem Ipsum', text: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet', icon: {path: BgImage}},
      {titel: 'Lorem Ipsum', text: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet', icon: {path: BgImage}},
      {titel: 'Lorem Ipsum', text: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet', icon: {path: BgImage}},
    ]
  }

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
          <title>Erdbau & Minibaggerverleih - ZHJ </title>
          <meta
            name="description"
            content="Minibagger für kleine Baustellen im Bereich des Erdbaus oder- Garten- und Landschaftsbaus finden Sie auf www.zhj.at/erdbau! Jetzt Angebote durchstöbern!"
          />
          <meta name="subject" content="Erdbau und Minibaggerverleih" />

          <meta name="og:title" content="ZHJ | Erdbau & Minibaggerverleih" />
          <meta name="og:type" content="Website" />
          <meta name="og:url" content="https://www.zhj.at/erdbau" />
          <meta name="og:image" content="http://www.zhj.at/xyz" />
          <meta
            name="og:site_name"
            content="Erdbau & Minibaggerverleih - ZHJ"
          />
          <meta
            name="og:description"
            content="Minibagger für kleine Baustellen im Bereich des Erdbaus oder- Garten- und Landschaftsbaus finden Sie auf www.zhj.at/erdbau! Jetzt Angebote durchstöbern!"
          />

          <link rel="canonical" href="https://www.zhj.at/erdbau" />
        </Helmet>

        <Header image={BgImage}>
          <h1 className="light align-center">
            ZHJ – Zitzenbacher Herbert jun. <br />
            Minibaggerverleih in Mölbling
          </h1>
          <p className="container-middle align-center">
            Sie haben eine kleine Baustelle und benötigen einen Minibagger? <br />
            Wir haben das passende Angebot für Sie!
          </p>
        </Header>

        <WeDo />

        {/* <Fade bottom>
          <div className="container-big pt">
            <h1 className="light align-center">Welche <span className="medium">Arbeiten</span> Verichten wir?</h1>
          </div>
          </Fade>
        <Services data={this.state.services} /> */}

        <Container />

        <div className="pt">
          <Preorder
            button="T 04262 / 27 380"
            button2="office@zhj-fahrzeugtechnik.at"
            title="Kontaktieren Sie uns"
            text="Für weitere Fragen, Beratung und/oder mehr Informationen zu den Angeboten steht Ihnen das Team von ZHJ gerne zur Verfügung."
            time={false}
          />
        </div>

        {/* <FeedBack /> */}
      </div>
    );
  }
}

export default ErdbauPage;
