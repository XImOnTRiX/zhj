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

        <div className="hh2"></div>
        <div className="container pb">
          <h1 className="light">
            Impressum
          </h1>
          <h6 className="big pt">Verantwortlich für den Inhalt</h6>
          <p className="">
            Es wird keinerlei Haftung für den Inhalt, insbesondere für die Richtigkeit, Vollständigkeit und Aktualität der Homepage und der Website übernommen. Irrtümer werden vorbehalten. Dieser Haftungsausschluss gilt auch für verlinkte Seiten.
          </p>

          <p className="pt ">
            ZHJ Fahrzeugtechnik Handels u. Dienstleistungs GesmbH<br />
            Mölbling-Ost 4<br />
            9330 Mölbling<br />
          </p>
          <p className="sspt">
            T 04262 27380<br />
            F 04262 27388<br />
            office@zhj-fahrzeugtechnik.at<br />
          </p>
          <p className="sspt">
            Inh.: Zitzenbacher Herbert jun.
          </p>
          <p className="sspt">
            FN: 336257x
          </p>
          <p className="sspt">
            UID: ATU65565578
          </p>




          <h6 className="big pt">
            Konzept, Layout und Programmierung
          </h6>
          <p className="">
            <a target="_blank" href="https://www.designintime.at">design in time werbeagentur e.U.</a>
          </p>

          <h6 className="big pt">
            Bildbearbeitung
          </h6>
          <p className="">
            <a target="_blank" href="https://www.designintime.at">design in time werbeagentur e.U.</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Impressum;
