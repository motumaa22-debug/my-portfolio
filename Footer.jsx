import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Made with <FaHeart style={{ color: '#ef4444', display: 'inline', margin: '0 4px' }} /> 
          by {personalInfo.name} © {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;