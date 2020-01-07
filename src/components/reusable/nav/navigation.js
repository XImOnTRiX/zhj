import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { url } from "./url";

import Taxi from "../../../media/logos/Taxi.png";
import Technik from "../../../media/logos/fzTechnik.png";
import Autohandel from "../../../media/logos/autohandel.png";
import Autovermietung from "../../../media/logos/autovermietung.png";
import Erdbau from "../../../media/logos/erdbau.png";
import About from "../../../media/logos/about.png";

import OnlineImg from "../../../media/logos/ZHJ_ONLINE.png";

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      nav: undefined,
      colored: "colored-nav-false",
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateNav);
    window.addEventListener("resize", this.resizeUpdate);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateNav);
    window.removeEventListener("resize", this.resizeUpdate);
  }

  updateNav = () => {
    this.setState({
      pos: window.pageYOffset
    });
    this.setClassColored();
  };

  handleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
      nav: this.state.open === true ? "closed-nav" : "open-nav"
    }));
  };

  resizeUpdate = () => {
    console.log("resize");

    this.setState({
      width: window.innerWidth
    });
  };

  setClassColored = () => {
    if (this.state.pos > 10 && this.state.colored !== "colored-nav") {
      this.setState({ colored: "colored-nav" });
    }
    if (this.state.pos < 10 && this.state.colored !== "colored-nav-false") {
      this.setState({ colored: "colored-nav-false" });
    }
  };

  whereAmI = () => {
    switch (document.location.pathname) {
      case url[0]:
        return "Fahrzeugtechnik";
      case url[1]:
        return "Autohandel";
      case url[2]:
        return "Autovermietung";
      case url[3]:
        return "Taxi";
      case url[4]:
        return "Erdbau";
      case url[5]:
        return "Über uns";
      case "/datenschutz":
        return "Datenschutz";
      case "/impressum":
        return "Impressum";
      default:
        return "Über uns";
    }
  };

  setPos = () => {
    window.scrollTo(0, 1);
  };

  renderNavIcons = () => {
    if (this.state.width < 1400) {
      return null;
    } else {
      return (
        <React.Fragment>
          <div className="path-container">
            <img
              alt="fz-technik"
              className={"nav-image-1 " + this.state.nav}
              src={Technik}
            />
          </div>
          <div className="path-container">
            <img
              alt="karosserie & spenglerei"
              className={"nav-image-2 " + this.state.nav}
              src={Autohandel}
            />
          </div>
          <div className="path-container">
            <img
              alt="taxiservice"
              className={"nav-image-3 " + this.state.nav}
              src={Autovermietung}
            />
          </div>
          <div className="path-container">
            <img
              alt="erdbau"
              className={"nav-image-4 " + this.state.nav}
              src={Taxi}
            />
          </div>
          <div className="path-container">
            <img
              alt="autohandel"
              className={"nav-image-5 " + this.state.nav}
              src={Erdbau}
            />
          </div>
          <div className="path-container">
            <img
              alt="autovermietung"
              className={"nav-image-6 " + this.state.nav}
              src={About}
            />
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <div id="navpos" className="nav-container">
        <div className={"nav-container " + this.state.nav}>
          <svg width="100" height="100">
            <circle
              id="circle"
              fill="white"
              stroke="rgb(255, 222, 0)"
              className={this.state.nav + " circle-2"}
            />
          </svg>
          <svg width="100" height="100">
            <circle id="circle" fill="#2b2b2b" className={this.state.nav} />
          </svg>

          <div
            className={"burger-menu " + this.state.nav}
            onClick={this.handleClick}
          >
            <div className={"burger"}></div>
          </div>

          <nav className={this.state.nav}>
            <p className={this.state.nav + " nav-link-1"}>
              <NavLink onClick={this.handleClick} to={url[0]}>
                Fahrzeugtechnik
              </NavLink>
            </p>
            <p className={this.state.nav + " nav-link-2"}>
              <NavLink onClick={this.handleClick} to={url[1]}>
                Autohandel
              </NavLink>
            </p>
            <p className={this.state.nav + " nav-link-3"}>
              <NavLink onClick={this.handleClick} to={url[2]}>
                Autovermietung
              </NavLink>
            </p>
            <p className={this.state.nav + " nav-link-4"}>
              <NavLink onClick={this.handleClick} to={url[3]}>
                Taxi
              </NavLink>
            </p>
            <p className={this.state.nav + " nav-link-5"}>
              <NavLink onClick={this.handleClick} to={url[4]}>
                Erdbau
              </NavLink>
            </p>
            <p className={this.state.nav + " nav-link-6"}>
              <NavLink onClick={this.handleClick} to={url[5]}>
                Über uns
              </NavLink>
            </p>
          </nav>

          {this.renderNavIcons()}

        </div>
        <div
          className={
            this.state.colored +
            " flex-align-center row navbar " +
            this.state.nav
          }
        >
          <div className="colz-3">
            <NavLink to="/">
              <img
                alt="zhj online logo"
                className="coloredNavClass"
                src={OnlineImg}
              />
            </NavLink>
          </div>
          <div className="colz-6">
            <h6 className="align-center">{this.whereAmI()}</h6>
          </div>
          <div className="colz-3"></div>
        </div>
      </div>
    );
  }
}
