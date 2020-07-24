/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { loadingAnimation1, loadingAnimation2, loadingAnimation3 } from './animation';

export const Lds = styled.div`
  margin: 0 auto;
  position: relative;
  width: 80px;
  height: 70px;
  & div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #07578a;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 8px;
    ${loadingAnimation1()}
  }
  & div:nth-child(2) {
    left: 8px;
    ${loadingAnimation2()}
  }
  & div:nth-child(3) {
    left: 32px;
    ${loadingAnimation2()}
  }
  & div:nth-child(4) {
    left: 56px;
    ${loadingAnimation3()}
  }
`;
