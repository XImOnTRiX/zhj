import React from "react";

export const PopUp = (props) => (
  <div>
    <div className="popupOverlay-close" onClick={props.clickEvent}></div>
    <div className="popupOverlay">
      <div className=" flexbox container-middle-small flex-align-center modal">
        {/* <div className="close"></div> */}
        <div className="popupContent">
          <h5 className="light">Wichtige Information</h5>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          </p>
        </div>
      </div>
    </div>
  </div>

);
