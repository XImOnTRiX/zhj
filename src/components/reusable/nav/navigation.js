import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { url } from './url';

import Taxi from '../../../media/logos/Taxi.png';
import Technik from '../../../media/logos/fzTechnik.png';
import Getränke from '../../../media/logos/getränke.png';
import Akku from '../../../media/logos/akku.png';
import Erdbau from '../../../media/logos/erdbau.png';
import Shop from '../../../media/logos/shop.png';


export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, nav: ''};
  }

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
      nav: this.state.open === true ? 'closed-nav' : 'open-nav',
    }))
    console.log(this.state);
  }




  render() {
    return (
      <div className={"nav-container " + this.state.nav}>

        <svg width="100" height="100">
          <circle id="circle" fill="white" stroke="rgb(255, 222, 0)" className={this.state.nav + " circle-2"}/>
        </svg>
        <svg width="100" height="100">
          <circle id="circle"  fill="#2b2b2b" className={this.state.nav}/>
        </svg>


        <div className="logo">LOGO</div>

        <div className={"burger-menu " + this.state.nav} onClick={this.handleClick}>
          <div className={"burger"}></div>
        </div>

        <nav className={this.state.nav}>
          <p className={this.state.nav + " nav-link-1"}>
            <NavLink
              onClick={this.handleClick}
              to={url[0]}>Taxiunternehmen
            </NavLink>
          </p>
          <p className={this.state.nav + " nav-link-2"}>
            <NavLink
              onClick={this.handleClick}
              to={url[1]}>Werkstatt
            </NavLink>
          </p>
          <p className={this.state.nav + " nav-link-3"}>
            <NavLink
              onClick={this.handleClick}
              to={url[2]}>Getränkehandel
            </NavLink>
          </p>
          <p className={this.state.nav + " nav-link-4"}>
            <NavLink
              onClick={this.handleClick}
              to={url[3]}>Akkufirma
            </NavLink>
          </p>
          <p className={this.state.nav + " nav-link-5"}>
            <NavLink
              onClick={this.handleClick}
              to={url[4]}>Erdbau
            </NavLink>
          </p>
          <p className={this.state.nav + " nav-link-6"}>
            <NavLink
              onClick={this.handleClick}
              to={url[5]}>Shop24
            </NavLink>
          </p>
        </nav>

        <div className="path-container">
          <img className={"nav-image-1 " + this.state.nav} src={Taxi} />
        </div>
        <div className="path-container">
          <img className={"nav-image-2 " + this.state.nav} src={Technik} />
        </div>
        <div className="path-container">
          <img className={"nav-image-3 " + this.state.nav} src={Getränke} />
        </div>
        <div className="path-container">
          <img className={"nav-image-4 " + this.state.nav} src={Akku} />
        </div>
        <div className="path-container">
          <img className={"nav-image-5 " + this.state.nav} src={Erdbau} />
        </div>
        <div className="path-container">
          <img className={"nav-image-6 " + this.state.nav} src={Shop} />
        </div>

      </div>
    );
  }
}
