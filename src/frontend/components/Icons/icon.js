import React from 'react';
import { IconStyle } from './styles';

function Icon({ color, size, viewBox, children }) {
  return (
    <IconStyle>
      <svg
        fill={color}
        height={size}
        width={size}
        viewBox={viewBox}
      >
        {children}
      </svg>
    </IconStyle>
  );
}

export default Icon;
