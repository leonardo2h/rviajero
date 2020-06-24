import React from 'react';
import { Link } from 'react-router-dom';
import { Episode, EpisodesCont } from './styles';

const Episodes = ({ episodes }) => {
  return (
    <EpisodesCont>
      {
        episodes.map((episode) => {
          return (
            <Episode key={episode._id}>
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
            </Episode>
          );
        })
      }
    </EpisodesCont>
  );
};

export default Episodes;
