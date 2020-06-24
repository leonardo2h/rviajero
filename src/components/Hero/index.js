import React from 'react';
import { Helmet } from 'react-helmet';
import { InfoCat, HeroCat, InfoText } from './styles';

const Hero = ({ coverData: { desc, cover, showTitle, tags } }) => {

  let flag;
  showTitle === undefined ? flag = true : flag = showTitle;

  return (
    <>
      <Helmet>
        <title>
          {`${desc} | Registro Viajero`}
        </title>
        {tags && <meta name='keywords' content={tags} />}
      </Helmet>
      <HeroCat cover={cover} showTitle={flag}>
        <InfoCat>
          <InfoText>
            <h1>{desc}</h1>
          </InfoText>
        </InfoCat>
      </HeroCat>
    </>
  );
};

export default Hero;
