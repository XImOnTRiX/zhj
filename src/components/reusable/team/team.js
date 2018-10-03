import React, { Component } from 'react';
import { IMAGE_PATH_EXTENDED } from '../../../config/';

class Team extends Component{
  renderBox = (data) => {
    console.log(data);
    return(
      data.team.entries.map((collect, i) => {
        console.log(collect);
        return(
          <div key={i} className="colum collg-2 colms-4 col-12">
            <div className="row">
              <div className="column collg-6 colms-6 col-6">
                <img alt={i} src={IMAGE_PATH_EXTENDED + collect.image.path} className="images" />
              </div>
            </div>
            <div className="column collg-10 colms-10 col-10">
              <h6>{collect.title}</h6>
            </div>
          </div>
        );
      })
    );
  }

  render(){
    const { data } = this.props

    return(
      <div className="row container-big">
        {this.renderBox(data)}
      </div>

    );
  }
}
export default Team;
