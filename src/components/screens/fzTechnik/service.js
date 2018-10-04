import React from 'react';
import ScrollBoxContainer from '../../reusable/scrollBox/index';

export const ServiceList = (props) => (
  <div>
    <div className="row">
      <div className="collg-1"></div>
      <div className="column">
        <h2 className="light pleft">Unsere <span className="medium">Leistungen</span> für Sie</h2>
      </div>
    </div>
    <div className="row">
      <div className="collg-1"></div>
        <div className="column colmd-6 collg-4">
          <p className="p">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa
          </p>
          <ScrollBoxContainer />
        </div>
        <div className="column colmd-5 collg-7 justify-center align-center">
          <h2 className="light italic">
            "Autoreparatur ist <span className="medium">Vertrauens</span>sache"
          </h2>
        </div>
    </div>
  </div>
);
