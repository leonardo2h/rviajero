import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { CardStyle, InfoCard, Title, GhostFlag, GhostImg } from '../Card/styles';

const GhostCard = () => (
  <CardStyle>
    <GhostImg>
      <Skeleton height='95%' />
    </GhostImg>
    <InfoCard>
      <Title>
        <h2><Skeleton width='150px' /></h2>
        <h3><Skeleton width='150px' /></h3>
      </Title>
      <GhostFlag>
        <Skeleton circle={true} height={30} width={30} grid-area='bandera' justify-self='center' />
      </GhostFlag>
      <p><Skeleton width='150px' /></p>
    </InfoCard>
  </CardStyle>

);

export default GhostCard;
