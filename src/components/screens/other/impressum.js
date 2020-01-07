import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';


class Impressum extends Component {
  componentDidMount() {
    if(this.props.history.action === "PUSH") {
      setTimeout(() => {
        window.scrollTo(0,1);
      },500)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimension)
  }

  render() {
    return (
      <div className="container-fullWidth">
        <Helmet>
          <title>Impressum - ZHJ</title>
          <meta name="description" content=""/>
          <meta name="subject" content="Impressum" />

          <meta name="og:title" content="ZHJ | Impressum"/>
          <meta name="og:type" content="Website"/>
          <meta name="og:url" content="https://www.zhj.at/impressum"/>
          <meta name="og:image" content="https://www.zhj.at/xyz"/>
          <meta name="og:site_name" content="Impressum - ZHJ"/>
          <meta name="og:description" content=""/>

          <link rel="canonical" href="https://www.zhj.at/impressum" />
        </Helmet>

        <div className="hh"></div>
        <div className="container pb">
          <h1 className="light">
            Impressum
          </h1>
          <h6 className="big pt">Verantwortlich für den Inhalt</h6>
          <p className="">
            Es wird keinerlei Haftung für den Inhalt, insbesondere für die Richtigkeit, Vollständigkeit und Aktualität der Homepage und der Website übernommen. Irrtümer werden vorbehalten. Dieser Haftungsausschluss gilt auch für verlinkte Seiten.
          </p>

          <p className="pt ">
            design in time werbeagentur e.U.<br />
            Burgstraße 9<br />
            9330 Althofen<br />
          </p>
          <p className="sspt">
            T 0699 190 10 202<br />
            office(at)designintime.at<br />
            www.designintime.at<br />
          </p>
          <p className="sspt">
            Inh.: Sandra Bacher-Schönfelder
          </p>
          <p className="sspt">
            FN: 399732 t
          </p>
          <p className="sspt">
            UID: ATU67796815
          </p>




          <h6 className="big pt">
            Konzept, Layout und Umsetzung
          </h6>
          <p className="">
            design in time werbeagentur e.U.
          </p>

          <h6 className="big pt">
          Bildbearbeitung
          </h6>
          <p className="">
            design in time werbeagentur e.U.
          </p>
        </div>
      </div>
    );
  }
}

export default Impressum;
