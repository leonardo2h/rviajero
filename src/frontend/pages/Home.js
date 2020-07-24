import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import HomeHero from '../components/HomeHero';
import { Context } from '../Context';
import ListOfCards from '../components/ListOfCards';

const Home = () => {
  const { loading, data, error } = useContext(Context);
  let places;
  if (!loading) {
    places = Object.values(data.entities.place);
  }

  return (
    <>
      <Helmet>
        <title>Blog de viajes | Registro Viajero</title>
        <meta name='description' content='Guia de viajes donde puedes encontrar lugares para visitar, consejos, tips y toda la información necesaria para organizar un viaje.' />
        <meta name='keywords' content='a donde ir de vacaciones,a donde viajar,a donde viajar en,articulos de viaje,blog de turismo,Blog de viajes,consejos de viajes,destinos para vacaciones,destinos para viajar,guia de viajes,lugares para viajar,lugares para visitar,mejores destinos,organizar viaje,que destino visitar,Tips de viajes,viajes,blog de un viaje,Planificar viaje,viaje' />
      </Helmet>
      <HomeHero />
      <ListOfCards places={places} loading={loading} error={error} />
    </>
  );
};

export default Home;
