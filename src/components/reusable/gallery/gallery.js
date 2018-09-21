import React, { Component } from 'react';

import { GET_URL, GET_TOKEN } from '../../../config';
import Slider from 'react-slick';

class Gallery extends Component{
  renderGallery = (data, filter, name) => {
    console.log(data);
    return(
      data.galleries.map((gallery, i) => {
        if (gallery.title == name) {
          return(
            gallery.images.map((image, i) => {
              console.log(filter);
              if(filter === '') {
                return(
                  <div key={i} className="gal-padding">
                    <div className="gallery-item">
                      <img src={'http://localhost' + image.path} />
                    </div>
                  </div>
                );
              } else if(image.meta.category === filter) {
                return(
                  <div key={i} className="gal-padding">
                    <div className="gallery-item">
                      <img src={'http://localhost' + image.path} />
                    </div>
                  </div>
                );
              } 
            })
          );
        } else {
          console.log('false');
          return;
        }
      })
    );
  }
  render(){
    const { data, filter, name } = this.props;

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
          {this.renderGallery(data, filter, name)}
        </Slider>
      </div>
    );
  }
}

export default Gallery;
