/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeroContactStyle = styled.div`
  background: rgba(247, 247, 247, 0.9);
  border-top: 2px outset;
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  padding: 10px 10px;
  font-size: 1.1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    font-size: 1.5em;
    padding: 15px 5px;
    @media (max-width: 768px){
      padding: 10px 5px;
    }
  }
  & p{ 
    padding: 20px 0px;
  }
  & h2{
    font-size: 1em;
    padding: 20px 3px;
  }
`;

export const MailStyle = styled.div`
  line-height: 1;
  display: flex;
  align-items: center;
`;
