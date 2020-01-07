import React, { Component } from 'react';
import Slider from 'react-slick';
import { IMAGE_PATH } from '../../../config';

class SliderStyle extends Component {

  renderGallery = (data) => {
    console.log(data);
    return data.entries.map((data, i) => {
      console.log('hi');
      return (
        <div key={i} className="container-full">
          <div className="row">
            <div className="colmd-6">
              <img alt="minibagger" src={IMAGE_PATH + data.images.path} />
            </div>
            <div className="colmd-6">
              <h5 className="light">{data.title}</h5>
              <div className="sspt" dangerouslySetInnerHTML={{__html: data.description}}>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
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

    return (
      <div className="container">
        <Slider { ...settings}>
          {this.renderGallery(this.props.use)}
        </Slider>
      </div>
    );
  }
}

export default SliderStyle;
