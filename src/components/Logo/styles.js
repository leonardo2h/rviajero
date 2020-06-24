/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Logorv = styled.div`
  float: left;
  padding: 11px;
  @media (max-width: 768px){
    float: none;
    text-align: center;
    padding: 5px;
    & img{
      width: 300px;
    }
  }
`;
