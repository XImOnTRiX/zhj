import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

export default class TimerEvent extends Component {
  state = {
    time: this.props.countFrom,
  }

  componentDidMount() {
    let intervalId = setInterval(this.updateCounter, 1000);
    this.setState({intervalId: intervalId});
    console.log(this.state);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateCounter = () => {
    var newCount = this.state.time - 1;
    if(newCount >= 0) {
      this.setState({time: newCount})
    } else {
      clearInterval(this.state.intervalId);
      this.props.action();
    }
  }

  goTo = () => {
    this.props.action();
    clearInterval(this.state.intervalId);
    this.setState({time: 0});
  }

  break = () => {
    clearInterval(this.state.intervalId);
    this.setState({time: 0, message: 'break'});
  }

  render() {
    return (
      <Fade>
        <div className="row justify-center flex-align-center fh">
          {this.props.display ?
            <h4 className="container align-center ">
              {this.state.time}
            </h4>
            : ''
          }
          {this.state.message === 'break' ?
          <div className="container">
            <h5 className="light align-center">Die Weiterleitung wurde abgebrochen</h5>
            <p className="align-center">Falls Sie doch unseren Fahrzeugbestand ansehen wollen klicken Sie einfach auf "WEITER"</p>
          </div> : this.props.children}
          {
            this.props.buttons ?
              <div className="container flexbox justify-center">
                <div className="p"><button onClick={this.break} className="btn-border-rounded-full">abbrechen</button></div>
                <div className="p"><button onClick={this.goTo} className="btn-border-rounded-full-inverse">weiter</button></div>
              </div>
            : ''
          }

        </div>
      </Fade>
    );
  }
}
