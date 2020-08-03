import express from 'express';
import Email from '../services/email';
import config from '../config';

function sendMail(app) {
  const router = express.Router();
  app.use('/api/contact', router);

  const {
    mailhost,
    mailport,
    mailuser,
    mailclient,
    mailsecret,
    mailtoken,
  } = config;

  //Mail sender
  const oEmail = new Email({
    host: mailhost,
    port: mailport,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: mailuser,
      clientId: mailclient,
      clientSecret: mailsecret,
      refreshToken: mailtoken,
    },
  });

  router.post('/', async (req, res, next) => {
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

    try {
      const info = await oEmail.sendMail(email);
      res.status(200).send('Correo enviado');
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
      next(error);
    }
  });
}

export default sendMail;
