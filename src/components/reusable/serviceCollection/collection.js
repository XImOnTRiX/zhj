import React, { Component } from 'react';
import { IMAGE_PATH_EXTENDED } from '../../../config/';

class Collection extends Component{
  renderBox = (data) => {
    return(
      data.serviceCollection.entries.map((collect, i) => {
        return(
          <div key={i} className="colum collg-4 colms-6 colz-12">
            <div className="row">
              <div className="column collg-2 colms-2 colz-2">
                <img alt={i} src={IMAGE_PATH_EXTENDED + collect.image.path} className="img" />
              </div>
              <div className="column collg-10 colms-10 colz-10">
                <h6>{collect.title}</h6>
                <p>{collect.content}</p>
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
      <div className="row container-big">
        {this.renderBox(data)}
      </div>

    );
  }
}
export default Collection;
