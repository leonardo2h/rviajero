/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const EpisodeStyle = styled.div`
  height: 300px;
  overflow: hidden;
  & a {
    text-decoration: none;
  }
  & a:visited {
    color: black;
  }
  & img{
    width: 100%;
  }
`;
