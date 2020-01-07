import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { IMAGE_PATH } from '../../../config';
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
    return(
      data.galleries.map((gallery, i) => {
        if (gallery.title === name) {
          return(
            gallery.images.map((image, i) => {
              if(filter === '') {
                images.push(IMAGE_PATH + image.path)
                return(
                  <div key={i} className="gal-padding">
                    <div className={"gallery-item"}>
                      <img alt={image.path} lat={i} onClick={() => this.setState({isOpen: true, photoIndex: i})} src={IMAGE_PATH + image.path} />
                    </div>
                  </div>
                );
              } else if(image.meta.category === filter) {
                images.push(IMAGE_PATH + image.path)
                return(
                  <div key={i} className="gal-padding">
                    <div className={"gallery-item"}>
                      <img alt={i} onClick={() => this.setState({isOpen: true, photoIndex: i})} src={IMAGE_PATH + image.path} />
                    </div>
                  </div>
                );
              } else { return undefined; }
            })
          );
        } else {
          return undefined;
        }
      })
    );
  }
  render(){
    const { data, filter, name } = this.props;
    const { photoIndex, isOpen } = this.state;
    const images = [];

    if(this.props.settings === 'second') {
      var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesPerRow: 1,
            }
          },
          {
            breakpoint: 568,
            settings: {
              slidesPerRow: 1,
            },
          }
        ]
      };

      return(
        <div className="gallery shadow">
          <Slider { ...settings}>
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
    } else {
      var settings2 = {
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
          <Slider { ...settings2}>
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
}

export default Gallery;
