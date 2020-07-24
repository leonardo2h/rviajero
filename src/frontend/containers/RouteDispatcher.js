import React, { useContext } from 'react';
import { Context } from '../Context';
import Hero from '../components/Hero';
import ListOfEpisodes from '../components/ListOfEpisodes';
import ListOfCards from '../components/ListOfCards';
import BlogPost from '../components/BlogPost';

const RouteDispatcher = (props) => {
  let coverData;
  let places;
  let podcasts;
  let showTitle;

  const { location: { state: { CatId, subCatId, id } } } = props;
  const { loading, error, data: { entities: { categories, countries, place } } } = useContext(Context);

  if (CatId) {
    coverData = categories[CatId];
    podcasts = coverData.podcasts;
    places = Object.values(place).filter((item) => item.category === CatId);
    showTitle = false;
  }

  if (subCatId) {
    coverData = countries[subCatId];
    places = Object.values(place).filter((item) => item.country === subCatId);
    showTitle = true;
  }

  if (id) {
    coverData = place[id];
    showTitle = true;
  }

  return (
    <>
      <Hero coverData={coverData} showTitle={showTitle} />
      {podcasts && <ListOfEpisodes episodes={podcasts} loading={loading} error={error} />}
      {places && <ListOfCards places={places} loading={loading} error={error} />}
      {id && <BlogPost route={coverData.route} />}
    </>
  );
};

export default RouteDispatcher;
