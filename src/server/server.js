/* eslint-disable comma-dangle */
import express from 'express';
import cors from 'cors';
import config from './config';
import apiData from './routes/data';
import sendMail from './routes/mail';

//Environment variables
const { port } = config;

//Server
const app = express();
app.use(express.json());
app.use(cors());

//Route for Graphql
apiData(app, __dirname);
//Mail sender route
sendMail(app);

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
