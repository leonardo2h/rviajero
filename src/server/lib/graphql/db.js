import MongoClient from 'mongodb';
import config from '../../config';

const { dbuser, dbpassword, dbhost, dbname } = config;
const uri = `mongodb+srv://${dbuser}:${dbpassword}@${dbhost}/${dbname}?retryWrites=true&w=majority`;
let connection;
async function connectDB() {
  if (connection) return connection;

  let client;
  try {
    client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    connection = client.db(dbname);
  } catch (error) {
    console.error('Could not connect to db', uri, error);
    process.exit(1);
  }
  return connection;
}

module.exports = connectDB;
