/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 250px));
  grid-gap: 30px;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  @media screen and (max-width: 768px) {
    margin: 20px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 200px));
    grid-gap: 20px;   
  }
  @media screen and (max-width: 575px) {
    margin: 10px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 300px));
  }
`;
