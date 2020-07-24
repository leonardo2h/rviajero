import React from 'react';
import { Link } from 'react-router-dom';
import { FooterStyles, About, Bio, Follow, Rights } from './styles';
import logo from '../../statics/logolarge2.png';
import Facebook from '../Icons/facebook';
import Instagram from '../Icons/instagram';
import Mail from '../Icons/mail';
import Youtube from '../Icons/youtube';
import Twitter from '../Icons/twitter';
import Podcast from '../Icons/podcast';

const Footer = () => {
  const fecha = new Date();
  const anio = fecha.getFullYear();

  return (
    <FooterStyles>
      <About>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} width={350} alt='Logo registro viajero' />
          </Link>
        </div>
        <Bio>
          <p>La idea de este blog es registrar las experiencias vividas en cada uno de los viajes realizados, dirigido a aquellas personas que están interesadas en buscar información de los diferentes destinos para planificar sus viajes.</p>
        </Bio>
        <Follow>
          <p>Sígueme en:</p>
          <a href='https://www.instagram.com/registroviajero' target='_blank'>
            <Instagram size={35} viewBox='0 0 128 128' />
          </a>
          <Facebook size={35} viewBox='0 0 48 48' />
          <Mail size={35} viewBox='0 0 60 60' />
          <Youtube size={35} viewBox='0 0 48 48' />
          <Twitter size={35} viewBox='0 0 60 60' />
          <Podcast size={35} viewBox='0 0 60 60' />
        </Follow>
      </About>
      <Rights>
        <p>
          {`COPYRIGHT © ${anio} Registro Viajero`}
        </p>
        <p>registroviajero@gmail.com</p>
      </Rights>
    </FooterStyles>
  );
};

export default Footer;
