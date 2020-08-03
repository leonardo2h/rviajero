import dotenv from 'dotenv';

dotenv.config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  dbuser: process.env.DB_USER,
  dbpassword: process.env.DB_PASSWORD,
  dbhost: process.env.DB_HOST,
  dbname: process.env.DB_NAME,
  mailhost: process.env.MAIL_HOST,
  mailport: process.env.MAIL_PORT,
  mailuser: process.env.MAIL_USER,
  mailclient: process.env.MAIL_CLIENT_ID,
  mailsecret: process.env.MAIL_CLIENT_SECRET,
  mailtoken: process.env.MAIL_REFRESH_TOKEN,
};

export default config;
