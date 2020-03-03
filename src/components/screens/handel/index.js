import React, { Component } from 'react';
import Preorder from '../../reusable/preorder/index';
import { Helmet } from 'react-helmet';

import TimerEvent from '../../reusable/timer';

class AutohandelPage extends Component {
  componentDidMount() {
    if(this.props.history.action === "PUSH") {
      setTimeout(() => {
        window.scrollTo(0,1);
      },500)
    }
  }

  redirectTo = () => {
    var loc = 'https://www.willhaben.at/iad/gebrauchtwagen/gebrauchtwagenhaendler-detail?orgId=20115931';
    window.open(loc, "_blank");
  }

  render() {
    return (
      <div className="container-fullWidth">

        <Helmet>
          <title>Autohandel - ZHJ</title>
          <meta name="description" content="Hier bei ZHJ finden Sie hochwertige Fahrzeuge zu günstigen Preisen. Schauen Sie einfach mal rein."/>
          <meta name="subject" content="Autohandel" />

          <meta name="og:title" content="ZHJ | Autohandel"/>
          <meta name="og:type" content="Website"/>
          <meta name="og:url" content="https://www.zhj.at/autohandel"/>
          <meta name="og:image" content="https://www.zhj.at/xyz"/>
          <meta name="og:site_name" content="Autohandel - ZHJ"/>
          <meta name="og:description" content="Hier bei ZHJ finden Sie hochwertige Fahrzeuge zu günstigen Preisen. Schauen Sie einfach mal rein."/>

          <link rel="canonical" href="https://www.zhj.at/autohandel" />
        </Helmet>

        <TimerEvent
          display={true}
          countFrom={10}
          action={this.redirectTo}
          buttons={true}
          children={
            <div className="container">
              <h5 className="light align-center">Sie werden in Kürze nach www.willhaben.at weitergeleitet</h5>
              <p className="align-center">Falls Sie nicht automatisch weitergeleitet werden, klicken Sie auf "WEITER"</p>
            </div>
          }
        />

        <Preorder
          button="Kontakt"
          title="Kontaktieren Sie uns"
          text="Für weitere Fragen, Beratung und/oder mehr Informationen zu den Angeboten steht Ihnen das Team von ZHJ gerne zur Verfügung. Wir freuen uns darauf eine Nachricht von Ihnen zu erhalten"
          time={false} />
      </div>
    );
  }
}

export default AutohandelPage;
