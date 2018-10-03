import React, { Component } from 'react';

class Akku extends Component{
  heading="Was wir bieten";
  title="Prüfen";
  title2="Ersetzen";
  title3="Tunen";
  title4="Spezialprodukte";
  text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea";
  render(){
    return(
      <div>
        <h2 className="light align-center heading">
          {this.heading}
        </h2>
        <div className="container-big row">
          <div className="column collg-3">
            <div className="infobox">
              <h4 className="light">{this.title}</h4>
              <p>{this.text}</p>
            </div>
          </div>
          <div className="column collg-3">
            <div className="infobox">
              <h4 className="light">{this.title2}</h4>
              <p>{this.text}</p>
            </div>
          </div>
          <div className="column collg-3">
            <div className="infobox">
              <h4 className="light">{this.title3}</h4>
              <p>{this.text}</p>
            </div>
          </div>
          <div className="column collg-3">
            <div className="infobox">
              <h4 className="light">{this.title4}</h4>
              <p>{this.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Akku;
