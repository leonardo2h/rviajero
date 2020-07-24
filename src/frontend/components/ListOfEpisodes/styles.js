/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const EpisodesCont = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 300px));
  grid-gap: 30px;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
`;
