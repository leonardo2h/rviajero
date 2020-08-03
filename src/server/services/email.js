import nodemailer from 'nodemailer';

class Email {
  constructor(oConfig) {
    this.createTransport = nodemailer.createTransport(oConfig);
  }

  async sendMail(oEmail) {
    const info = await this.createTransport.sendMail(oEmail);
    this.createTransport.close();
    return info;
  }
}

export default Email;
