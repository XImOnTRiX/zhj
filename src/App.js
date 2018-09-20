import React, { Component } from 'react';

import { Navigation } from './components/reusable/nav/navigation';
import { Main } from './components/reusable/nav/main';
import Footer from './components/reusable/footer';

import { Btn } from './components/reusable/btn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Main />


      </div>
    );
  }
}

export default App;
