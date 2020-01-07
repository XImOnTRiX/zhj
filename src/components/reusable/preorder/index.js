import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { PopUp } from './popup';

class Preorder extends Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }


  handleClick = () => {
    window.location.href = "mailto:office@zhj.at";
    // var date = new Date();
    // var day = date.getDay();
    // var hours = date.getHours();
    //
    // if ( this.props.time === true ){
    //   if ( day >= 1 &&  day <= 5 && hours >= 9 && hours <= 17){
    //     window.location.href = "mailto:mail@example.org";
    //   }
    //   else {
    //     this.setState({
    //       open: !this.state.open,
    //     })
    //   }
    // }
    // else {
    //   window.location.href = "mailto:mail@example.org";
    // }
    //  if ( day >= 1 && day <= 5 && hours >= 10 && hours <= 17){
    //    window.location.href = "mailto:mail@example.org";
    //  }
    //  else {
    //    this.setState({
    //      open: !this.state.open,
    //    })
    //  }
  }

  togglePopUp = () => {
    if (this.state.open === true) {
      return <PopUp clickEvent={this.handleClick} />
    }
  }

  render(){
    return(
      <div className="pt">
        <Fade bottom>
          <h1 className="light align-center">
            {this.props.title}
          </h1>
        </Fade>
        <div className="row container">
          <Fade bottom>
            <p className="text align-center">
              {this.props.text}
            </p>
          </Fade>
        </div>

        <div className="row container justify-center">
          <Fade bottom>
            <button onClick={this.handleClick} className="btn-border-rounded-full orderButton">
              {this.props.button}
            </button>
          </Fade>
          <div className="row container justify-center">
            {this.togglePopUp()}
          </div>
        </div>
      </div>
    );
  }
}

export default Preorder;
