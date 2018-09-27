import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { GET_URL, GET_TOKEN } from '../../../config';
import Slider from 'react-slick';

class Gallery extends Component{
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  renderGallery = (data, filter, name, images) => {
    console.log(data);
    images = images;
    return(
      data.galleries.map((gallery, i) => {
        if (gallery.title === name) {
          return(
            gallery.images.map((image, i) => {
              console.log(image);
              if(filter === '') {
                images.push('http://localhost' + image.path)
                return(
                  <div key={i} className="gal-padding">
                    <div className="gallery-item">
                      <img onClick={() => this.setState({isOpen: true})} src={'http://localhost' + image.path} />
                    </div>
                  </div>
                );
              } else if(image.meta.category === filter) {
                images.push('http://localhost' + image.path)
                return(
                  <div key={i} className="gal-padding">
                    <div className="gallery-item">
                      <img onClick={() => this.setState({isOpen: true})} src={'http://localhost' + image.path} />
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
    const { photoIndex, isOpen } = this.state;
    const images = [];

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
      <div className="gallery shadow">
        <Slider {...settings}>
          {this.renderGallery(data, filter, name, images)}
        </Slider>
        {isOpen && (
          <Lightbox
            enableZoom={false}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({isOpen: false})}
            onMovePrevRequest={() => this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })}
            onMoveNextRequest={() => this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })}
          />
        )}
      </div>
    );
  }
}

export default Gallery;
