import React, { Component } from 'react';
import {Card} from '../../reusable/flatCard/card';


export default class WeDo extends Component {
  state = {
    services: [
      {
        title: 'Minibaggerarbeiten',
        description: 'Aushub- und Erdarbeiten vom Profi! Bei uns erhalten Sie jahrelange Erfahrung, professionelle und saubere Arbeit bei Ihrem Haus- und Gartenbau. '
      },
      {
        title: 'Minibaggerverleih',
        description: 'Sie legen gerne selbst Hand an? Bei uns können Sie hochwertige Minibagger ausleihen! Egal ob als Gewerbekunde oder als Privatperson. So bekommt Ihr persönliches Projekt maschinelle Unterstützung!'
      },
      {
        title: 'Hydromeisel',
        description: 'Wir bieten Ihnen unsere Erdbau-Konzession für professionelle Schremmarbeiten inkl. Fahrer an! Die Verleihung von Zubehör wie Rüttelplatten, Stampfer und elektrische Zwangsmischer sind ein weiterer Bonus für Sie!'
      },
      {
        title: 'Winterdienst',
        description: 'Sie suchen Pfleger für Ihre Außenflächen? Wir übernehmen für Sie Baum- und Strauchschnitt, das Rasenmähen, Bewässern, das Schneeräumen und alles Notwendige rund um den Schutz von Fußgängergehwegen. Ob für Firmengelände oder für Privatflächen, wir befreien Sie von den lästigen Pflichten!'
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
