import React, { Component } from 'react';

import Slider from 'react-slick';

class Gallery extends Component{
  renderGallery = (data) => {
    console.log(this.props.filter);
    return(
      data.path.map((image) => {
        return(
          <div className="gal-padding">
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

    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 2,
      slidesPerRow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesPerRow: 2,
          }
        },
        {
          breakpoint: 568,
          settings: {
            slidesPerRow: 2,
          },
        }
      ]
    };

    return(
      <div className="gallery">
        <Slider {...settings}>
          {this.renderGallery(data)}
        </Slider>
      </div>
    );
  }
}

export default Gallery;
