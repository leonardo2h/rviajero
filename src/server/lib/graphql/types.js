/* eslint-disable indent */
/* eslint-disable operator-linebreak */
const { ObjectID } = require('mongodb');
const connectDb = require('./db');

module.exports = {
  Categories: {
    podcasts: ({ podcasts }) => podcasts,
    countries: async ({ countries }) => {
      let db;
      let countriesData;
      let ids;

      try {
        db = await connectDb();
        ids = countries ? countries.map((id) => ObjectID(id)) : [];
        countriesData =
          ids.length > 0
            ? await db
                .collection('country')
                .find({ _id: { $in: ids } })
                .toArray()
            : null;
      } catch (error) {
        console.error(error);
      }
      return countriesData;
    },
  },
  Country: {
    places: async ({ places }) => {
      let db;
      let placesData;
      let ids;

      try {
        db = await connectDb();
        ids = places ? places.map((id) => ObjectID(id)) : [];
        placesData =
          ids.length > 0
            ? await db
                .collection('places')
                .find({ _id: { $in: ids } })
                .toArray()
            : null;
      } catch (error) {
        console.error(error);
      }
      return placesData;
    },
  },
};
