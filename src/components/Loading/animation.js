import { css, keyframes } from 'styled-components';

// Se define la animacion
const loadingKeyFrames1 = keyframes`
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`;

const loadingKeyFrames2 = keyframes`
  from{
    transform: translate(0, 0);
  }
  to{
    transform: translate(24px, 0);
  }
`;

const loadingKeyFrames3 = keyframes`
  from{
    transform: scale(1);
  }
  to{
    transform: scale(0);
  }
`;

export const loadingAnimation1 = () => (
  css`
    animation: 0.6s ${loadingKeyFrames1} infinite;
  `);

export const loadingAnimation2 = () => (
  css`animation: 0.6s ${loadingKeyFrames2} infinite;`
);

export const loadingAnimation3 = () => (
  css`animation: 0.6s ${loadingKeyFrames3} infinite;`
);
