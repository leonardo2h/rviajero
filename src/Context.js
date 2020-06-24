/* eslint-disable import/prefer-default-export */
import React, { createContext, useState } from 'react';
import { normalize, schema } from 'normalizr';

export const Context = createContext();

const Provider = ({ children }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const value = {
    data,
    loading,
    error,
    setData: (data) => {
      //Normalizacion de los datos devueltos por el api
      if (data) {
        const place = new schema.Entity('place', {}, {
          idAttribute: '_id',
          processStrategy: (value, parent, key) => ({ ...value, country: parent._id, country_title: parent.title, category: parent.category, flag: parent.flag }),
        });

        const country = new schema.Entity('countries', {
          places: new schema.Array(place),
        },
        {
          idAttribute: '_id',
          processStrategy: (value, parent, key) => ({ ...value, category: parent._id }),
        });

        const category = new schema.Entity('categories', {
          countries: new schema.Array(country),
        }, { idAttribute: '_id' });

        const categories = { categories: new schema.Array(category) };
        const normalizedData = normalize(data, categories);
        setData(normalizedData);
      }
    },
    setLoading: (loading) => {
      setLoading(loading);
    },
    setError: (error) => {
      setError(error);
    },
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
