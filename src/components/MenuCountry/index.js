import React from 'react';
import { Link } from 'react-router-dom';
import MenuPlaces from '../MenuPlaces';

const MenuCountry = ({ countries }) => {
  return (
    <ul>
      {
        countries.map((country) => {
          return (
            <li key={country._id} className='has-sub'>
              <Link
                to={{
                  pathname: `/${country.route}`,
                  state: {
                    subCatId: country._id,
                  },
                }}
              >
                {country.title}
              </Link>
              {country.places && <MenuPlaces places={country.places} />}
            </li>
          );
        })
      }
    </ul>
  );
};

export default MenuCountry;
