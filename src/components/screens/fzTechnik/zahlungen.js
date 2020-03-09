import React from 'react';
import Fade from 'react-reveal/Fade';

import Bar from '../../../media/grafiken/money.png';
import Card from '../../../media/grafiken/credit-card.png';
import Mat from '../../../media/grafiken/withdraw.png';

export const ZahlungsModalitaeten = (props) => (
  <div className="row pb pt container-middle-big">
    <Fade bottom>
      <h3 className="regular column col-12 align-center wordbreak">Zahlungsmodalitäten</h3>
      <p className="col-12 align-center">
        Wir akzeptieren Bargeld, Bankomat- oder Kreditkarte.
      </p>
    </Fade>
    <Fade bottom>
      <div className="column colz-4 colmd-4 flex-align-center">
        <div className="container">
          <img alt="Barzahlung" src={Bar} />
        </div>
      </div>
      <div className="column colz-4 colmd-4 flex-align-center">
        <div className="container">
          <img alt="Bankomat vorhanden" src={Mat} />
        </div>
      </div>
      <div className="column colz-4 colmd-4 flex-align-center">
        <div className="container">
          <img alt="Kartenzahlung" src={Card} />
        </div>
      </div>
    </Fade>
  </div>
);
