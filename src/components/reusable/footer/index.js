import React, { Component } from 'react';

import OnlineImg from '../../../media/logos/ZHJ_ONLINE.png';
import FacebookImg from '../../../media/grafiken/facebook.svg';
import InstaImg from '../../../media/grafiken/instagram.svg';

import { NavLink } from 'react-router-dom';

// import FooterImg from '../../../media/grafiken/bg-footer.svg';


class Footer extends Component {
  scrolling = () => {
    setTimeout(function(){ window.scrollTo({ top: 950, left: 0, behavior: "smooth" }); }, 800);

      // window.scrollBy({ top: 950, left: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div>
        <div className="footer">
          {/* <img src={FooterImg} /> */}
          <div className="whereweare">
            <div className="test nop">
              <iframe
                title="google maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.0239428608!2d14.446486042866237!3d46.86290122236294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47704013904197d3%3A0xc8923c4284e8cab9!2sZHJ+Fahrzeugtechnik!5e0!3m2!1sde!2sat!4v1560327186708!5m2!1sde!2sat"
                allowFullScreen
                className="mapFrame"
              >
              </iframe>
            </div>
          </div>
        </div>
        <div className="bg-tertiary-dark container-full footer-area">
          <div className="row">
            <div className="colmd-4 flexbox flex-align-center justify-center">
              <div className="row">
                <div className="colmd-4 colz-5">
                  <img className="footerImg" src={OnlineImg} />
                </div>
                <div className="colmd-2 colz-1"></div>
                <div className="colmd-3 colz-3">
                  <a alt="ZHJ Facebook" href="https://www.facebook.com/pages/category/Business-Service/ZHJ-Fahrzeugtechnik-Handels-und-Dienstleistungs-GesmbH-205867256133231/" target="_blank"><img className="facebookImg" src={FacebookImg} /></a>
                </div>
                <div className="colmd-3 colz-3">
                  <a alt="ZHJ Instagram" href="https://www.instagram.com/zhj_fahrzeugtechnik/?hl=de" target="_blank"><img className="facebookImg" src={InstaImg} /></a>
                </div>
              </div>
            </div>
            <div className="colmd-3">
              <h6 className="container light"> </h6>
              <div className="row">
                <div className="colmd-6 colz-6">
                  <NavLink to="/fahrzeugtechnik"><p className="primary">Fahrzeugtechnik</p></NavLink>
                  <NavLink to="/autohandel"><p className="primary">Autohandel</p></NavLink>
                  <NavLink to="/autovermietung"><p className="primary">Autovermietung</p></NavLink>
                  <NavLink to="/taxi"><p className="primary">Taxi</p></NavLink>
                  <NavLink to="/erdbau"><p className="primary">Erdbau</p></NavLink>
                </div>
                <div className="colmd-6 colz-6">
                  <NavLink to="/über-uns" onClick={this.scrolling} ><p className="primary">Über uns</p></NavLink>
                  <NavLink to="/impressum"><p className="primary">Impressum</p></NavLink>
                  <NavLink to="/datenschutz"><p className="primary">Datenschutz</p></NavLink>
                </div>
              </div>
            </div>
            <div className="colmd-3">
              <h6 className="container light">Kontaktinformationen</h6>
              <p className="container primary">
                ZHJ Fahrzeugtechnik Handels u. Dienstleistungs GesmbH <br />
                Mölbling-Ost 4 <br />
                9330 Mölbling
              </p>
              <p className="container nopt primary">
                T 04262 / 27 380 <br />
                F 04262 / 27 388 <br />
                office@zhj-fahrzeugtechnik.at <br />
              </p>
            </div>
            <div className="colmd-2">
              <h6 className="container light">Öffnungszeiten</h6>
              <p className="container primary">
                Montag bis Freitag <br />
                08:00 Uhr – 12:00 Uhr<br />
                12:30 Uhr – 17:00 Uhr
              </p>
            </div>
          </div>
        </div>
        <div className="bg-tertiary container-full">
          <a href="https://designintime.at" target="_blanc"><p className="footerSmall white">by designintime werbeagentur e.U.</p></a>
        </div>
      </div>

    );
  }
}


export default Footer;
