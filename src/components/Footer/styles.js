/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterStyles = styled.footer`
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
`;

export const About = styled.div`
  padding: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-top: 2px outset;
`;

export const Bio = styled.div`
  font-weight: lighter;
  font-size: 13px;
  width: 500px;
  text-align: justify;
  margin: 15px;
`;

export const Rights = styled.div`
  height: 50px;
  background-color: rgb(91, 182, 92);
  font-size: 13px;
  text-align: center;
  color: white;
  padding-top: 8px;
`;

export const Follow = styled.div`
  & p {
    margin-bottom: 5px;
    font-size: 14px;
  }
  @media (max-width: 854px){
    & p {
      text-align: center;
    }
  }
`;
