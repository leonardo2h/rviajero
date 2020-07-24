/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import webImg from '../../statics/contacto_web.png';
import mobileImg from '../../statics/contacto_mobile.png';

const InputStyle = css`
  padding: 8px 9px;
  margin: 8px 0px 5px 0px;
  border-radius: 3px;
  border: solid 1px #dbdbe2;
  box-sizing: border-box;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-size: 1em;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.div`
  padding: 30px;
  @media screen and (max-width: 1050px){
    padding: 20px;
  }
  @media screen and (max-width: 920px){
    padding: 10px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const RightForm = styled.div`
  padding: 30px;
  height: 80%;
  background-image: url(${webImg});
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 1050px){
    padding: 20px;
    height: 70%;
  }
  @media screen and (max-width: 920px){
    padding: 10px;
    height: 65%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const UpForm = styled.div`
  display: none;
  height: 200px;
  background-image: url(${mobileImg});
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 670px) {
    height: 150px;
  }
  @media screen and (max-width: 575px) {
    height: 130px;
  }
`;

export const Input = styled.input`
  ${InputStyle}
`;

export const InputText = styled.textarea`
  ${InputStyle}
  resize: none;
`;

export const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 3px;
  display: block;
  color: white;
  font-family: 'Lato', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-size: 1.1em;
  background: rgb(91, 182, 92);
  border: solid 1px #dbdbe2;
  cursor: pointer;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;
