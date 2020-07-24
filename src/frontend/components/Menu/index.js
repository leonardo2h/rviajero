import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuCountry from '../MenuCountry';
import useMenu from '../../hooks/useMenu';
import './menu.css';

const Menu = ({ menu = [] }) => {
  useMenu();

  return (
    <div id='cssmenu'>
      <ul>
        {
          menu.map((item) => {
            return (
              item.countries ? (
                <li key={item._id} className={item.class}>
                  <Link
                    to={{
                      pathname: `/${item.route}`,
                      state: {
                        CatId: item._id,
                      },
                    }}
                  >
                    {item.title}
                  </Link>
                  {item.countries && <MenuCountry countries={item.countries} />}
                </li>
              ) : (
                <li key={item._id}>
                  <Link
                    to={{
                      pathname: `/${item.route}`,
                      state: {
                        CatId: item._id,
                      },
                    }}
                  >
                    <i className={item.class} />
                    {item.title}
                  </Link>
                </li>
              )
            );
          })
        }
      </ul>
    </div>
  );
};

Menu.propTypes = {
  menu: PropTypes.array,
};

export default Menu;
