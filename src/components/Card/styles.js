/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const CardStyle = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 10px;
  height: 290px;
  background-color: rgba(247, 247, 247, 0.9);
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 15px grey;
  box-shadow: 0px 0px 15px grey;
  & a{
    text-decoration: none;
  }
  & a:visited {
    color: black;
  }
  @media screen and (max-width: 768px) {
    height: 250px;
    -webkit-box-shadow: 0px 0px 8px grey;
    box-shadow: 0px 0px 8px grey;
  }
  @media screen and (max-width: 575px) {
    height: 330px;
    -webkit-box-shadow: 0px 0px 7px grey;
    box-shadow: 0px 0px 7px grey;
  }
`;

export const City = styled.img`
  width: 100%;
`;

export const InfoCard = styled.div`
  color: black;
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  padding: 0 0 5px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr / 1fr 1fr;
  grid-template-areas: "title bandera" "desc desc";
  & h2{
    font-size: 18px;
  }
  & h3 {
  font-size: 14px;
  }
  & p {
    font-size: 12px;
  }
`;

export const Title = styled.div`
  grid-area: title;
  align-self: center;
`;

export const Flag = styled.img`
  width: 30px;
  justify-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  grid-area: bandera;
`;

export const GhostFlag = styled.div`
  width: 30px;
  justify-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  grid-area: bandera;
`;

export const GhostImg = styled.div`
  height: 212px;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 170px;
  }
  @media screen and (max-width: 575px) {
    height: 260px;
  }
`;
