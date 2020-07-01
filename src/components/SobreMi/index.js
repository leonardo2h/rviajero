import React, { useContext } from 'react';
import { Context } from '../../Context';
import BlogPost from '../BlogPost';
import Hero from '../Hero';

const About = (props) => {
  const { location: { state: { CatId } } } = props;
  const { data: { entities: { categories } } } = useContext(Context);
  const coverData = categories[CatId];

  return (
    <>
      <Hero coverData={coverData} />
      <BlogPost route='sobre-mi' />
    </>
  );
};

export default About;
