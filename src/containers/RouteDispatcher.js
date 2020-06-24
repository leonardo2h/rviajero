import React, { useContext } from 'react';
import { Context } from '../Context';
import Hero from '../components/Hero';
import Episodes from '../components/Episodes';
import ListOfCards from '../components/ListOfCards';

const RouteDispatcher = (props) => {
  let coverData;
  let places;
  let podcasts;
  const { location: { state: { CatId, subCatId, id } } } = props;
  const { data: { entities: { categories, countries, place } } } = useContext(Context);

  if (CatId) {
    coverData = categories[CatId];
    podcasts = coverData.podcasts;
    places = Object.values(place).filter((item) => item.category === CatId);
  }

  if (subCatId) {
    coverData = countries[subCatId];
    places = Object.values(place).filter((item) => item.country === subCatId);
  }

  if (id) {
    coverData = place[id];
  }

  return (
    <>
      <Hero coverData={coverData} />
      {podcasts && <Episodes episodes={podcasts} />}
      {places && <ListOfCards places={places} />}
      {/* {id && <BlogPost category={category} />}  */}
    </>
  );
};

export default RouteDispatcher;
