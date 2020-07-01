import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { InfoCat, HeroCat, InfoText } from './styles';

const Hero = ({ coverData: { desc, hcover, tags }, showTitle }) => {

  return (
    <>
      <Helmet>
        <title>
          {`${desc} | Registro Viajero`}
        </title>
        {tags && <meta name='keywords' content={tags} />}
      </Helmet>
      <HeroCat cover={hcover} showTitle={showTitle}>
        <InfoCat showTitle={showTitle}>
          <InfoText>
            <h1>{desc}</h1>
          </InfoText>
        </InfoCat>
      </HeroCat>
    </>
  );
};

Hero.propTypes = {
  showTitle: PropTypes.bool,
  desc: PropTypes.string,
  hcover: PropTypes.string,
  tags: PropTypes.array,
};

export default Hero;
