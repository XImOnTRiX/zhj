import React, { Component } from 'react';

import { Navigation } from './components/reusable/nav/navigation';
import { Main } from './components/reusable/nav/main';
import CookieConsent from "react-cookie-consent";
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />
        <CookieConsent
          className="cookieConsent"
          style={{background:"#fff", color:"#000"}}
          buttonText="Verstanden"
          declineButtonText="Ablehnen"
          enableDeclineButton
        >
          <span className="cookieText">Diese Website verwendet Cookies. Hier gehts zu unserem <NavLink to={"/datenschutz"} className="bold">Datenschutz</NavLink></span>
          
        </CookieConsent>
      </div>
    );
  }
}

export default App;
