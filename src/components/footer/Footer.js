import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-info" >
        <h1>Michel Heredia</h1>
        <p>Buenos Aires, Argentina</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>WhatsApp 1155625116</p>
        <p>Gmail herediamichel18@gmail.com</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Michel Heredia</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/michel-heredia-9b37a413a/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://github.com/michelheredia" target="_blank" rel="noreferrer">
          <i class="fab fa-github github"></i>
          </a>
          <a href="https://www.instagram.com/michel.heredia.18/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
