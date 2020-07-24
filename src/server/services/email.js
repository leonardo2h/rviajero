const nodemailer = require('nodemailer');

class Email {
  constructor(oConfig) {
    this.createTransport = nodemailer.createTransport(oConfig);
  }

  enviarcorreo(oEmail, res) {
    try {
      this.createTransport.sendMail(oEmail, (error, info) => {
        if (error) {
          res.status(500).send(error.message);
        } else {
          res.status(200).send('Correo enviado');
        }
      });
      this.createTransport.close();
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Email;
