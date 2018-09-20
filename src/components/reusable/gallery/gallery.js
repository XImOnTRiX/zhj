import React, { Component } from 'react';

class Gallery extends Component{
  renderGallery = (data) => {
    console.log(data);
    return(
      data.path.map((image) => {
        return(
          <div className="colmd-4 gal-padding">
            <div className="gallery-item">
              {image}
            </div>
          </div>
        );
      })
    );
  }
  render(){
    const { data } = this.props;
    return(
      <div className="gallery">
        <div className="row gal-padding">
          {this.renderGallery(data)}
        </div>
      </div>
    );
  }
}

export default Gallery;
