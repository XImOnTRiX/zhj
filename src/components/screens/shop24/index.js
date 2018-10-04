import React, { Component } from 'react';
import Preorder from '../../reusable/preorder/index';

class Shop24Page extends Component {
  render() {
    return (
      <div className="container-fullWidth">
        <Preorder title="Jetzt Vorbestellen" text="Lorem ipsum" time={true} />
      </div>
    );
  }
}

export default Shop24Page;
