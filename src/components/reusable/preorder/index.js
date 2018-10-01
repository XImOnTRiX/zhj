import React, { Component } from 'react';
import Popup from './popup';

class Preorder extends Component{
  title="Jetzt Vorbestellen";
  text="der Text";

  handleClick() {
    const one = 1;
    if ( one == 2 ) {
      window.open("mailto:xyz@abc.com");
    }
    else {
      <Popup />
    }
  }

  render(){
    return(
      <div className="row container">
        <h1 className="light align-center title">
          {this.title}
        </h1>
        <p className="text">
          {this.text}
        </p>
        <button onClick={this.handleClick} className="btn-border-rounded-full">
          jetzt Bestellen
        </button>
      </div>
    );
  }
}

export default Preorder;
