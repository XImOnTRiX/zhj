import React from 'react';

export const ZahlungsModalitäten = (props) => (
  <div className="row container-middle-big section-padding">
    <h1 className="light column col-12 align-center wordbreak">Zahlungsmodalitäten</h1>
    <div className="column col-12 colmd-4 flex-align-center">
      <div>
        <img className="testcircle" />
        <p className="align-center">Bar</p>
      </div>
    </div>
    <div className="column col-12 colmd-4 flex-align-center">
      <div>
        <img className="testcircle" />
        <p className="align-center">Bankomat</p>
      </div>
    </div>
    <div className="column col-12 colmd-4 flex-align-center">
      <div>
        <img className="testcircle" />
        <p className="align-center">Kreditkarte</p>
      </div>
    </div>
  </div>
);
