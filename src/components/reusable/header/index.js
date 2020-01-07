import React, { Component } from 'react';
import { Parallax, withController } from 'react-scroll-parallax';

import Divider from '../../../media/images/header-divider.svg';

class Header extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.parallaxController.update();
      window.scrollTo(0, window.pageYOffset + 1);
    }, 500)
  }

  render() {
    return (
      <div className="fullScreenSection overflow-hidden">
        <div className="header-text row flex-align-center">
          <div className="colmd-12 container pt">
            {this.props.children}
          </div>
        </div>
        <Parallax y={['-20', '20']}>
          <img alt="Titelbild" className="header-img" src={this.props.image} />
        </Parallax>
        <img alt="divider svg" className="header-divider" src={Divider} />
      </div>
    );
  }
}

export default withController(Header);
