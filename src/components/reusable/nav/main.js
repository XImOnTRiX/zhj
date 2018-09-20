import React from 'react';
import { Switch, Route } from 'react-router-dom';


import TaxiPage from '../../screens/taxi';
import FzTechnikPage from '../../screens/fzTechnik';
import GetränkePage from '../../screens/getränke';
import AkkuPage from '../../screens/akku';
import ErdbauPage from '../../screens/erdbau';
import Shop24Page from '../../screens/shop24';

import Footer from '../footer';

import { url } from './url';

export const Main = () => (
  <main>
    <Switch>
      <Route path={url[0]} component={TaxiPage} />
      <Route path={url[1]} component={FzTechnikPage} />
      <Route path={url[2]} component={GetränkePage} />
      <Route path={url[3]} component={AkkuPage} />
      <Route path={url[4]} component={ErdbauPage} />
      <Route path={url[5]} component={Shop24Page} />
    </Switch>
  </main>
);
