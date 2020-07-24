/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Card from '../Card';

const ListOfCards = ({ places, loading, error }) => (
  <Container>
    {loading ?
      Array(10).fill().map((id, index) => (<Card key={index} />)) :
      places.map((place) => (
        <Card key={place._id} place={place} />
      ))}
  </Container>
);

ListOfCards.propTypes = {
  places: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default ListOfCards;
