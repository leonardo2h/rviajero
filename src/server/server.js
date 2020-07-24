/* eslint-disable comma-dangle */
import bodyParse from 'body-parser';
import express from 'express';
import cors from 'cors';
import gqlMiddleware from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { readFileSync } from 'fs';
import { join } from 'path';
import config from './config';
import Email from './services/email';
import resolvers from './lib/graphql/resolvers';

//Server
const app = express();
//Environment variables
const { dev, port, mailuser, mailclient, mailsecret, mailtoken } = config;
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'graphql', 'schema.graphql'),
  'utf-8'
);
//Graphql schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(cors());

//Graphql route
app.use(
  '/api',
  gqlMiddleware({
    schema,
    rootValue: resolvers,
    graphiql: dev,
  })
);

//Mail sender
const oEmail = new Email({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: mailuser,
    clientId: mailclient,
    clientSecret: mailsecret,
    refreshToken: mailtoken,
  },
});

//Mail endpoint
app.post('/contact', (req, res, next) => {
  const email = {
    from: 'registroviajero@gmail.com',
    to: 'registroviajero@gmail.com',
    subject: req.body.subject,
    html: `<div>
            <p>Nombre: ${req.body.name}</p>
            <p>Correo: ${req.body.email}</p>
            <p>Asunto: ${req.body.subject}</p>
            <p>Mensaje: ${req.body.message}</p>
           </div>`,
  };
  oEmail.enviarcorreo(email, res);
});

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
