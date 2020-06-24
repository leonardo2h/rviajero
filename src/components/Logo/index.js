import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../statics/logolarge.png';
import { Logorv } from './styles';

const Logo = () => (
  <Link to='/'>
    <Logorv>
      <img src={logo} width={250} alt='logo registro viajero' />
    </Logorv>
  </Link>
);

export default Logo;
