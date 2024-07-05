import React from 'react';
import instalogo from '../images/il.png'
import whatsapplogo from '../images/WhatsApp_icon.png';
import linkdn from '../images/lk.png';


function Footer() {
   
    
  return (
    <footer id="subscribe">
      <div className="footer-background">
        <h3>Follow Us on Social Media</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/?igsh=NTdzNnV5NG04NWJy" target="_blank" rel="noopener noreferrer">
            <img src={instalogo} alt="Instagram" />
          </a>
          <a href="https://whatsapp.com/dl/" target="_blank" rel="noopener noreferrer">
            <img src={whatsapplogo} alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/imbisat-sadiq-17054023b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img src={linkdn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
