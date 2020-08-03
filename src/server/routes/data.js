import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { readFileSync } from 'fs';
import { join } from 'path';
import config from '../config';
import resolvers from '../lib/graphql/resolvers';

const { dev } = config;

function apiData(app, dirname) {
  //Graphql schema
  const typeDefs = readFileSync(
    join(dirname, 'lib', 'graphql', 'schema.graphql'),
    'utf-8'
  );
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  //Graphql route
  app.use(
    '/api/data',
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: dev,
    })
  );
}

export default apiData;
