/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const InfoCat = styled.div`
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  height: 300px;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: flex-end;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
  @media screen and (max-width: 575px) {
    height: 200px;
  }
`;

export const HeroCat = styled.div`
  height: 300px;
  background-image: url(${(props) => props.cover});
  background-position: center;
  background-size: cover;
  & h1{
    visibility: ${(props) => (props.showTitle ? 'visible' : 'hidden')};
    font-size: 27px;
    color: white;
  }
  & p{
    font-size: 18px;
    color: white;
    font-weight: normal;
  }
  @media screen and (max-width: 768px) {
    height: 250px;
  }
  @media screen and (max-width: 575px) {
    height: 200px;
  }
`;

export const InfoText = styled.div`
  padding: 20px;
`;
