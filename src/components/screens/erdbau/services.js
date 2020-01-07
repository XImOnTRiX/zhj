import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import {FlatCard2} from '../../reusable/flatCard';

export default class Services extends Component {
  renderHelper = (data) => {
    return (
      data.map((data, i) => {
        return (
          <Fade key={i} bottom>
            <div className="colmd-4">
              <FlatCard2 data={data} />
            </div>
          </Fade>
        );
      })
    )
  }

  render() {
    const {data} = this.props;

    return (
      <div className="row container-big pb">
        {this.renderHelper(data)}
      </div>
    );
  }
}
