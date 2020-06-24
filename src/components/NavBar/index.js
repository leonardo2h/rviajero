import React from 'react';
import Logo from '../Logo';
import { MenuWithQuery } from '../../containers/GetMenu';

const NavBar = () => (
  <nav>
    <Logo />
    <MenuWithQuery />
  </nav>
);

export default NavBar;
