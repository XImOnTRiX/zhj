import React, { Component } from 'react';

class ScrollBox extends Component{
  renderBox = (data) => {
    return(
      data.serviceList.services.map((service, i) => {
        return(
          <p key={i}>
            {service}
          </p>
        );
      })
    );
  }

  render(){
    const { data } = this.props

    return(
      <div className={data.serviceList.exo ? 'exo scrollbox-container shadow-big' : 'scrollbox-container shadow-big '}>
        <div className="scrollbox">
          <div className="scrollbox-inside">
            {this.renderBox(data)}
          </div>
        </div>
      </div>
    );
  }
}

export default ScrollBox;
