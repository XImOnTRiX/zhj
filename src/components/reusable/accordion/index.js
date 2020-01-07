import React, { Component } from 'react';

export class Accordion extends Component {
  render() {
    return (
      <div
        className="accordion"
        {...this.props}
        >
          {this.props.children}
      </div>
    );
  }
}

export class AccordionPanel extends Component {
  state = {
    isOpen: false,
    elementHeight: 0,
  }

  handleClick = (e) => {
    var element = document.getElementById(this.props.index);
    this.setState({
      isOpen: this.state.isOpen ? false : true,
      elementHeight: element.clientHeight,
    })
  }

  render() {
    return (
      <div
        index={this.props.index}
        className="accordion-panel"
      >
        <div onClick={this.handleClick} className={`${this.state.isOpen ? 'header-open' : 'header-close'}`}>
          {this.props.header}
        </div>
        <div
          className={`${this.state.isOpen ? ' panel-open' : 'panel-close'} panel-content`}
          style={{maxHeight: this.state.elementHeight}}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
