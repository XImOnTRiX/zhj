import React, { Component } from 'react';
import { Parallax, withController } from 'react-scroll-parallax';

class UpdateParallax extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.parallaxController.update();
    }, 2000)
  }

  render() {
    return (
      <Parallax className="sp-fz" y={this.props.y}>
        {this.props.children}
      </Parallax>
    );
  }
}

export default withController(UpdateParallax);
