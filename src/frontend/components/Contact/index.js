import React from 'react';
import { Helmet } from 'react-helmet';
import ContactHero from '../ContactHero';
import ContactForm from '../ContactForm';

const Contact = () => (
  <>
    <>
      <Helmet>
        <title>Contacta a Registro Viajero</title>
      </Helmet>
      <ContactHero />
      <ContactForm />
    </>
  </>
);

export default Contact;
