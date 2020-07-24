/* eslint-disable import/prefer-default-export */
import React, { useContext, useEffect } from 'react';
import { Query } from 'react-apollo';
import { Context } from '../Context';
import { GET_DATA } from '../queries/appQuery';
import Loading from '../components/Loading';
import Menu from '../components/Menu';

const renderProp = ({ loading, error, data }) => {
  const { setData, setLoading, setError } = useContext(Context);
  useEffect(() => {
    setData(data);
    setLoading(loading);
    setError(error);
  }, [data]);

  if (loading) return <Loading />;
  if (error) return 'Error';
  return <Menu menu={data.categories} />;
};

export const MenuWithQuery = () => <Query query={GET_DATA}>{renderProp}</Query>;
