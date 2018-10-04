import React, { Component } from 'react';
import { PopUp } from './popup';

class Preorder extends Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }


  handleClick = () => {
    var date = new Date();
    var day = date.getDay();
    var hours = date.getHours();

    if ( this.props.time === true ){
      if ( day >= 1 &&  day <= 5 && hours >= 9 && hours <= 17){
        window.location.href = "mailto:mail@example.org";
      }
      else {
        this.setState({
          open: !this.state.open,
        })
      }
    }
    else {
      window.location.href = "mailto:mail@example.org";
    }
     if ( day >= 1 && day <= 5 && hours >= 10 && hours <= 17){
       window.location.href = "mailto:mail@example.org";
     }
     else {
       this.setState({
         open: !this.state.open,
       })
     }
  }

  togglePopUp = () => {
    if (this.state.open === true) {
      return <PopUp clickEvent={this.handleClick} />
    }
  }

  render(){
    return(
      <div className="container-middle-big">
            <h1 className="light align-center">
                {this.props.title}
            </h1>

        <div className="row container">
            <p className="text align-center">
              {this.props.text}
            </p>
        </div>

        <div className="row container justify-center">
            <button onClick={this.handleClick} className="btn-border-rounded-full orderButton">
              {this.props.button}
            </button>
        <h1 className="light align-center">
          {this.title}
        </h1>

        <div className="row container">
          <p className="text align-center">
            {this.text}
          </p>
        </div>

        <div className="row container justify-center">
          <button onClick={this.handleClick} className="btn-border-rounded-full orderButton">
            jetzt Bestellen
          </button>
          {this.togglePopUp()}
        </div>
      </div>
    </div>
    );
  }
}

export default Preorder;
