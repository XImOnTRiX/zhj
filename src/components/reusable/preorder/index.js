import React, { Component } from 'react';
import { PopUp } from './popup';

class Preorder extends Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  title="Jetzt Vorbestellen";
  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?";

  handleClick = () => {
    var date = new Date();
    var day = date.getDay();
    var hours = date.getHours();

     if ( day >= 1 &&  day <= 5 && hours >= 9 && hours <= 17){
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
      return <PopUp clickEvent={this.handleClick}/>
    }
  }

  render(){
    return(
      <div className="container-middle-big">
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
    );
  }
}

export default Preorder;
