/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeroStyle = styled.div`
  height: 300px;
  background-image: url('https://res.cloudinary.com/dwdhuxqs7/image/upload/v1592240689/hero_bvgags.jpg');
  background-position: center;
  background-size: cover;
  @media (max-width: 768px){
    height: 250px;
  }
  @media (max-width: 575px){
    height: 200px;
  }
`;

export const InfoPage = styled.div`
  height: 300px;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px){
    height: 250px;
  }
  @media (max-width: 575px){
    height: 200px;
  }
`;

export const Phrase = styled.div`
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-size: 25px;
  font-weight: normal;
  text-align: justify;
  color: white;
  width: 70%;
  @media (max-width: 768px){
    width: 80%;
    font-size: 22px;
  }
  @media (max-width: 575px){
    width: 80%;
    font-size: 20px;
  }
`;
