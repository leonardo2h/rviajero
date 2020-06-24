import React from 'react';
import { Link } from 'react-router-dom';

const MenuPlaces = ({ places }) => {
  return (
    <ul>
      {
        places.map((place) => (
          <li key={place._id}>
            <Link
              to={{
                pathname: `/${place.route}`,
                state: {
                  id: place._id,
                },
              }}
            >
              <i className='fa fa-fw fa-map-marker' />
              {place.title}
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

export default MenuPlaces;
