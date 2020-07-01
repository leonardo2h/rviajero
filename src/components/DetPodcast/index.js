import React, { useContext } from 'react';
import { Context } from '../../Context';
import Hero from '../Hero';
import BlogPost from '../BlogPost';

const DetPodcast = (props) => {
  const { location: { state: { id }, pathname } } = props;
  const { data: { entities: { categories } } } = useContext(Context);

  // extrae la categoria que tiene los podcasts
  const { podcasts } = Object.values(categories).find((category) => (category.podcasts !== null));
  const podcast = podcasts.find((item) => (item._id === id));
  return (
    <>
      <Hero coverData={podcast} showTitle={true} />
      <BlogPost route={pathname} />
    </>
  );
};

export default DetPodcast;
