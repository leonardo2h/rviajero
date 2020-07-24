import React from 'react';
import Icon from './icon';

function Facebook({ color, size, viewBox }) {
  return (
    <Icon color={color} size={size} viewBox={viewBox}>
      <circle cx='24' cy='24' fill='#4E71A8' r='24' />
      <path d='M29.9,19.5h-4v-2.6c0-1,0.7-1.2,1.1-1.2c0.5,0,2.8,0,2.8,0v-4.4l-3.9,0c-4.4,0-5.3,3.3-5.3,5.3v2.9h-2.5V24  h2.5c0,5.8,0,12.7,0,12.7h5.3c0,0,0-7,0-12.7h3.6L29.9,19.5z' fill='#FFFFFF' />
    </Icon>
  );
}

export default Facebook;
