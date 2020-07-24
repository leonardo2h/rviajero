import React from 'react';
import { HeroContactStyle, MailStyle } from './styles';
import Instagram from '../Icons/instagram';
import Facebook from '../Icons/facebook';
import Youtube from '../Icons/youtube';
import Twitter from '../Icons/twitter';
import Podcast from '../Icons/podcast';
import Mail from '../Icons/mail';

const HeroContact = () => {
  return (
    <HeroContactStyle>
      <h1>Redes sociales</h1>
      <div className='siguenos'>
        <a href='https://www.instagram.com/registroviajero' target='_blank'>
          <Instagram size={45} viewBox='0 0 128 128' />
        </a>
        <Facebook size={45} viewBox='0 0 48 48' />
        <Twitter size={45} viewBox='0 0 60 60' />
      </div>
      <h1>Escucha el podcast</h1>
      <div className='siguenos'>
        <Podcast size={45} viewBox='0 0 60 60' />
        <Youtube size={45} viewBox='0 0 48 48' />
      </div>
      <MailStyle>
        <Mail size={30} viewBox='0 0 60 60' />
        <h2>registroviajero@gmail.com</h2>
      </MailStyle>
    </HeroContactStyle>
  );
};

export default HeroContact;
