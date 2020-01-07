import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';


class Datenschutz extends Component {
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
          <title>Datenschutzerklärung - ZHJ</title>
          <meta name="description" content=""/>
          <meta name="subject" content="Datenschutzerklärung" />

          <meta name="og:title" content="ZHJ | Datenschutzerklärung"/>
          <meta name="og:type" content="Website"/>
          <meta name="og:url" content="https://www.zhj.at/datenschutz"/>
          <meta name="og:image" content="https://www.zhj.at/xyz"/>
          <meta name="og:site_name" content="Datenschutzerklärung - ZHJ"/>
          <meta name="og:description" content=""/>

          <link rel="canonical" href="https://www.zhj.at/datenschutzerklärung" />
        </Helmet>
        <div className="hh"></div>
        <div className="container">
          <h1 className="light">
            Datenschutz
          </h1>
          <p>
            lorem ipsum dolor sit amet
          </p>
        </div>

      </div>
    );
  }
}

export default Datenschutz;
