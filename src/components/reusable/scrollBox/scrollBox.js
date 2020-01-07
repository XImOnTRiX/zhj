import React, { Component } from 'react';

class ScrollBox extends Component{
  render(){
    const { data } = this.props

    return(
      <div className={data.serviceList.exo ? 'exo scrollbox-container shadow-big' : 'scrollbox-container shadow-big '}>
        <div className="scrollbox">
          <div className="scrollbox-inside"
            dangerouslySetInnerHTML={{__html: data.serviceList.html}}
          >
          </div>
        </div>
      </div>
    );
  }
}

export default ScrollBox;
