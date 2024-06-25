import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer__bottom">
      <div className="footer_item--copyright">
        <div className="left">
        <h3>Find us here </h3>
        <span className="separator">natasha.vyas@digi-prex.com</span>
        </div>
        <div className="right">
        <h3>123ABC</h3>
        <span className="separator">09999999999</span>
        </div>
        </div>
      <div className="footer__item--social">
        <a href="https://www.instagram.com/"><FaInstagram /></a>
        <a href="https://www.facebook.com/"><FaFacebook /></a>
        <a href="https://www.twitter.com/"><FaTwitter /></a>
      </div>
    </div>
</footer>
  );
}

export default Footer;
