import React, { Component } from 'react';
import { IMAGE_PATH_EXTENDED } from '../../../config/';

class Team extends Component{
  renderBox = (data) => {
    return(
      data.team.entries.map((collect, i) => {
        return(
          <div key={i} className="colum collg-2 colms-4 colz-12">
            <div className="row flex-align-center">
              <div className="column colz-12 flex-align-center">
                <img alt={i} src={IMAGE_PATH_EXTENDED + collect.image.path} className="images" />
                <h6 className="align-center">{collect.title}</h6>
              </div>
            </div>
          </div>
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
