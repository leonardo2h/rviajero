import React from 'react';
import { Link } from 'react-router-dom';
import { useNearScreen } from '../../hooks/useNearScreen';
import { CardStyle, City, InfoCard, Title, Flag } from './styles';
import GhostCard from '../GhostCard';

const Card = ({ place }) => {
  const [show, el] = useNearScreen();

  return (
    place ? (
      <CardStyle ref={el}>
        {
          show && (
            <Link
              to={{
                pathname: `/${place.route}`,
                state: {
                  id: place._id,
                },
              }}
            >
              <figure>
                <City src={place.cover} alt={place.title} />
              </figure>
              <InfoCard>
                <Title>
                  <h2>{place.title}</h2>
                  <h3>{place.country_title}</h3>
                </Title>
                <Flag src={place.flag} alt={place.country_title} />
                <p>{place.published_date}</p>
              </InfoCard>
            </Link>
          )
        }
      </CardStyle>
    ) :
      <GhostCard />
  );
};

export default Card;
