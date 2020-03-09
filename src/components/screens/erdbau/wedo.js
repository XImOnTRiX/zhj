import React, { Component } from 'react';
import {Card} from '../../reusable/flatCard/card';


export default class WeDo extends Component {
  state = {
    services: [
      {
        title: 'Minibaggerarbeiten',
        description: 'Wir sind ein konzessioniertes Erdbauunternehmen und bieten professionelle Erdbauarbeiten an, wie z. B.: Kanal-, Wasser- und Stromanschlüsse bei Neubauten, Sanierungsarbeiten bei Altbauten und Gartengestaltungen.'
      },
      {
        title: 'Minibaggerverleih',
        description: 'Bei uns können Sie einen Minibagger mieten. Egal ob als Gewerbekunde oder als Privatperson. So bekommt Ihr persönliches Projekt maschinelle Unterstützung.'
      },
      {
        title: 'Hydromeisel',
        description: 'Wir bieten professionelle Schremmarbeiten inkl. Fahrer. Die Verleihung von Zubehör wie Rüttelplatte, Stampfer und elektrischen Zwangsmischer sind ein weiterer Bonus für Sie.'
      },
      {
        title: 'Winterdienst',
        description: 'schaufeln - salzen - streuen. Wir sind Ihr kompetenter Winterdienst Partner für Ihre Objektbetreuung in Mölbling, Althofen und Umgebung.'
      },
    ]
  }

  renderHelper = () => {
    return this.state.services.map((data, i) => {
      return (
        <div key={i} className="colmd-6 collg-3">
          <Card>
            <h6 className="primary light big sph6pb">
              {data.title}
            </h6>
            <p>{data.description}</p>
          </Card>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container-big row sp-icon-container justify-center pb">
        {this.renderHelper()}
      </div>
    )
  }
}
