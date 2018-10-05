import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { url } from '../../reusable/nav/url.js';

import Taxi from '../../../media/logos/Taxi.png';

class LandingPage extends Component {
  render(){
    return(
      <div className="container-big flex-align-center">
        <div className="row">
          <NavLink
            onClick={this.handleClick}
            to={url[0]}><img src={Taxi} class="logos" />
          </NavLink>

          <NavLink
            onClick={this.handleClick}
            to={url[1]}><img src={Taxi} class="logos" />
          </NavLink>

          <NavLink
            onClick={this.handleClick}
            to={url[2]}><img src={Taxi} class="logos" />
          </NavLink>
          <NavLink
            onClick={this.handleClick}
            to={url[3]}><img src={Taxi} class="logos" />
          </NavLink>

          <NavLink
            onClick={this.handleClick}
            to={url[4]}><img src={Taxi} class="logos" />
          </NavLink>

          <NavLink
            onClick={this.handleClick}
            to={url[5]}><img src={Taxi} class="logos" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default LandingPage;
