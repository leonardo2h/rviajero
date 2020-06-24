/* eslint-disable import/prefer-default-export */
import styled, { keyframes, css } from 'styled-components';

const loadingFrame = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const loadingAnimation1 = () => (
  css`
   animation: ${loadingFrame} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  `);

export const LdsRing = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80px;
  height: 40px;
  & div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 32px;
  height: 32px;
  border: 4px solid #fff;
  border-radius: 50%;
  ${loadingAnimation1()};
  border-color: #fff transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
   animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
