import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { IMAGE_PATH } from '../../../config/';

class Team extends Component{
  renderBox = (data) => {
    return(
      data.team.entries.map((data, i) => {
        return(
          <Fade key={i} bottom>
            <div className="colum collg-3 colms-4 colz-12">
              <div className="row flex-align-center">
                <div className="column colz-12 flex-align-center nop">
                  <img alt={i} src={IMAGE_PATH + data.image.path} className="images" />
                  <div className="container-fullWidth">
                    <p className="regular medium bigger">{data.name}</p>
                    <p dangerouslySetInnerHTML={{__html: data.description}}></p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        );
      })
    );
  }

  render(){
    const { data } = this.props

    return(
      <div className="row ">
        {this.renderBox(data)}
      </div>
    );
  }
}
export default Team;
