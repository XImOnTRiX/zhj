import React from 'react';
import {IMAGE_PATH} from '../../../config';

export const FlatCard = (props) => (
  <div className="row">
    <div className="colmd-2">
      <div className="flat-icon">
        <img alt="" className="flat-icon" src={IMAGE_PATH + props.data.icon.path} />
      </div>
    </div>
    <div className="colmd-10">
      <p className="bold spb">
        {props.data.titel}
      </p>
      <p dangerouslySetInnerHTML={{__html: props.data.text}}>
        {/* {props.data.text} */}
      </p>
    </div>
  </div>
);

export const FlatCard2 = (props) => (
  <div className="row">
    <div className="colmd-4">
      <div className="flat-icon">
        <img alt="" className="flat-icon" src={props.data.icon.path} />
      </div>
    </div>
    <div className="colmd-8">
      <p className="bold spb">
        {props.data.titel}
      </p>
      <p>
        {props.data.text}
      </p>
    </div>
  </div>
);
