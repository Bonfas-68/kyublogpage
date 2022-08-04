import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa';
const SocialLinks = () => {
  return (
    <div>
      <a href="facebook.com/bonfasOluoch">
        <FaFacebook className="contact-icon" style={{ color: '#3b5998' }} />
      </a>
      <a href="github.com/Bonfas-68">
        <FaGithub style={{ color: 'gray' }} className="contact-icon" />
      </a>
      <a href="whatsapp.com" style={{ color: '#12af0a' }}>
        <FaWhatsapp className="contact-icon" />
      </a>
      <a href="twitter.com/bonfasoluoch">
        <FaTwitter style={{ color: '#00acee' }} className="contact-icon" />
      </a>
      <a href="linkedin.com">
        <FaLinkedin style={{ color: '#0e76a8' }} className="contact-icon" />
      </a>
      <a href="youtube.com">
        <FaYoutube style={{ color: '#c4302b' }} className="contact-icon" />
      </a>
    </div>
  );
};

export default SocialLinks;
