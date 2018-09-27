import React, { Component } from 'react';

class Collection extends Component{
  renderBox = (data) => {
    console.log(data);
    return(
      data.serviceCollection.entries.map((collect) => {
        console.log(collect);
        return(
          <div className="colum collg-4 flex-align-center">
            <p className="title">
              <img src={'http://6795395e.ngrok.io/cockpit-master/storage/uploads' + collect.image.path} className="img" />
              {collect.title}
            </p>
            <p className="description">
              {collect.content}
            </p>
          </div>
        );
      })
    );
  }

  render(){
    const { data } = this.props

    return(
      <div className="row collection">
        {this.renderBox(data)}
      </div>

    );
  }
}
export default Collection;
