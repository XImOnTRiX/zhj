import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import { url } from '../../reusable/nav/url.js';

import Taxi from '../../../media/logos/Taxi.png';
import Akku from '../../../media/logos/akku.png';
import Erdbau from '../../../media/logos/erdbau.png';
import Technik from '../../../media/logos/fzTechnik.png';
import Getränke from '../../../media/logos/getränke.png';
import Shop from '../../../media/logos/shop.png';

class LandingPage extends Component {
  render(){
    return(
      <div className="container-big flex-align-center justify-center sppt">
        <div className="row">
          <div className="colmd-4">
            <h2 className="light">Was es alles gibt</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
          </div>
          <div className="colmd-8">
            <div className="row">
              <div className="collg-4 colmd-6 colz-6">
                <NavLink
                  onClick={this.handleClick}
                  to={url[0]}><img src={Taxi} class="logos" />
                </NavLink>
              </div>
              <div className="collg-4 colmd-6 colz-6">
                <NavLink
                  onClick={this.handleClick}
                  to={url[1]}><img src={Technik} class="logos" />
                </NavLink>
              </div>
              <div className="collg-4 colmd-6 colz-6">
                <NavLink
                  onClick={this.handleClick}
                  to={url[2]}><img src={Getränke} class="logos" />
                </NavLink>
              </div>
              <div className="collg-4 colmd-6 colz-6">
                <NavLink
                  onClick={this.handleClick}
                  to={url[3]}><img src={Akku} class="logos" />
                </NavLink>
              </div>
              <div className="collg-4 colmd-6 colz-6">
                <NavLink
                  onClick={this.handleClick}
                  to={url[4]}><img src={Erdbau} class="logos" />
                </NavLink>
              </div>
              <div className="collg-4 colmd-6 colz-6">
                <NavLink
                  onClick={this.handleClick}
                  to={url[5]}><img src={Shop} class="logos" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
