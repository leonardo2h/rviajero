/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { EpisodesCont } from './styles';
import Episode from '../Episode';

const ListOfEpisodes = ({ episodes, loading, error }) => (
  <>
    <EpisodesCont>
      {
        loading ?
          Array(10).fill().map((id, index) => <Episode key={index} />) :
          episodes.map((episode) => (
            <Episode key={episode._id} episode={episode} />))
      }
    </EpisodesCont>
  </>
);

ListOfEpisodes.propTypes = {
  episodes: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default ListOfEpisodes;
