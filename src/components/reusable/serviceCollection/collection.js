import React, { Component } from 'react';

class Collection extends Component{
  renderBox = (data) => {
    console.log(data);
    return(
      data.services.service.map((servicedata) => {
        return(
          <p>
            {servicedata}
          </p>
        );
      })
    );
      }

  render(){
    const { data } = this.props

    return(
      <div className="">
        {this.renderBox(data)}
      </div>
    );
  }
}
export default Collection;
