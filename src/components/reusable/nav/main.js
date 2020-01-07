import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../../screens/landingPage';
import TaxiPage from '../../screens/taxi';
import FzTechnikPage from '../../screens/fzTechnik';
// import SpenglereiPage from '../../screens/spenglerei';
import AutovermietungPage from '../../screens/vermietung';
import ErdbauPage from '../../screens/erdbau';
import AutohandelPage from '../../screens/handel';

import Impressum from '../../screens/other/impressum';
import Datenschutz from '../../screens/other/datenschutz';

import Footer from '../footer';

import { url } from './url';

export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path={url[0]} component={FzTechnikPage} />
      <Route path={url[1]} component={AutohandelPage} />
      <Route path={url[2]} component={AutovermietungPage} />
      <Route path={url[3]} component={TaxiPage} />
      <Route path={url[4]} component={ErdbauPage} />
      <Route path={url[5]} component={LandingPage} />

      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Datenschutz} />
    </Switch>
    <Footer />
  </main>
);
