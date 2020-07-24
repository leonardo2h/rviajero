import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useNearScreen } from '../../hooks/useNearScreen';
import { EpisodeStyle } from './styles';

const Episode = ({ episode }) => {
  const [show, el] = useNearScreen();

  return (
    <EpisodeStyle ref={el}>
      {
        show && (
          episode ? (
            <Link
              to={{
                pathname: `${episode.route}`,
                state: { id: episode._id },
              }}
            >
              <figure>
                <img src={episode.cover} alt={episode.title} />
              </figure>
            </Link>
          ) :
            <Skeleton height='300px' />
        )
      }
    </EpisodeStyle>
  );
};

export default Episode;
