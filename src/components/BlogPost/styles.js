/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Article = styled.article`
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  padding: 30px 10px 20px;
  font-size: 1.2em;
  width: 83%;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  line-height: 1.5;

  & h2 {
    font-size: 22px;
    margin: 1em 0;
  }

  & img {
    display: block;
    margin: 1.5em auto;
    height: auto;
    max-width: 60%;
  }

  & ul {
    margin: 1em 0;
  }

  & ul li {
   margin-left: 2em;
  }

  & p{
    margin-bottom: 16px;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 30px 30px 20px;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    padding: 30px 20px 20px;
    & img {
     max-width: 80%;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 30px 10px 20px;
    & img {
      max-width: 100%;
    }
    & ul li {
       margin-left: 1.5em;
    }
  }

  @media screen and (max-width: 575px) {
    padding: 30px 10px 20px;
    text-align: left;
    word-break: break-word;
    & ul li {
      margin-left: 1.5em;
    }
  }
`;
