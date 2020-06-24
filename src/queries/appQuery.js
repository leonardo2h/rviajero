/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-boost';

export const GET_DATA = gql`
      query getData{
          categories{
            _id
            title
            desc
            cover
            route
            class
            showTitle
            countries{
              _id
              title
              desc
              cover
              flag
              route
              tags
              places{
                _id
                title
                published_date
                route
                desc
                cover
                hcover
                tags
              }
            }
            podcasts{
              _id
              title
              desc
              published_date
              route
              cover
              tags
            }
          }
      }
`;
