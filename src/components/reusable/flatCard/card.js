import React from 'react';
import Fade from 'react-reveal/Fade';

export const Card = ({children}) => (
  <Fade bottom>
    <div className="container white card-tertiary">
      {children}
    </div>
  </Fade>
);
