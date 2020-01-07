import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { Accordion, AccordionPanel } from '../../reusable/accordion';

export default class AccContainer extends Component {
  state = {
    info: [
      {titel: 'Reifen', text: 'Wir haben alle Arten von Sommer -/ Winterreifen und finden immer den passenden für Sie.'},
      {titel: 'Reparatur', text: 'Motor, Getriebe, Mobilitätsgarantie'},
      {titel: 'Prüfstelle', text: 'KFZ-Überprüfung nach §57a'},
      {titel: 'Unfallspezialist', text: 'Vollumfängliche Karosserie-, Lack-, und Schadensabwicklung von Versicherungsschäden'},
      {titel: 'Lackierung', text: 'Teil- und Vollflächenlackierung, Oldtimerlackierung'},
      {titel: 'Appschlepdienst', text: 'Wir arbeiten mit professionellen Abschleppdiensten zusammen, Anruf genügt!'},
      {titel: 'Leihwagen', text: 'Bei Service und Reparatur steht ihnen ein Ersatzwagen zur Verfügung'},
      {titel: 'Spenglerei', text: 'Hagelinstandsetzung, Reparatur und Austausch von Windschutzscheiben, Reparatur von Dellen '},
    ]
  }

  renderHelper = () => {
    return (
      this.state.info.map((data, i) => {
        return (
          <Fade key={i} bottom>
            <div className="container">
              <AccordionPanel
                index={i}
                header={<h6 className="big medium">{data.titel}</h6>}
              >
                <div id={i} className="row container">
                  <p>
                    {data.text}
                  </p>
                </div>
              </AccordionPanel>
            </div>
          </Fade>
        )
      })
    )

  }
  render() {
    return (
      <div className="container-big pb pt">
        <Accordion>
          {this.renderHelper()}
        </Accordion>
      </div>
    );
  }
}
