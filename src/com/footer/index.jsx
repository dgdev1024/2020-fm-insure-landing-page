/**
 * @file com/footer/index.jsx
 * Presents the footer at the end of the page.
 */

// Imports
import React from 'react';
import InsureLogo from '../../img/icon-logo.svg';
import IconFacebook from '../../img/icon-facebook.svg';
import IconTwitter from '../../img/icon-twitter.svg';
import IconPinterest from '../../img/icon-pinterest.svg';
import IconInstagram from '../../img/icon-instagram.svg';
import './index.scss';

// Component
const Footer = () => (
  <footer>
    <div className="container">
      <div className="fm-footer-top">
        <img src={InsureLogo} alt="Insure" class="fm-logo" />
        <div className="fm-social-links">
          <a href="#">
            <img src={IconFacebook} alt="Facebook" title="Facebook" />
          </a>
          <a href="#">
            <img src={IconTwitter} alt="Twitter" title="Twitter" />
          </a>
          <a href="#">
            <img src={IconPinterest} alt="Pinterest" title="Pinterest" />
          </a>
          <a href="#">
            <img src={IconInstagram} alt="Instagram" title="Instagram" />
          </a>
        </div>
      </div>
      <div className="fm-footer-body">
        <div className="fm-footer-links">
          <p>Our Company</p>
          <a href="#">How We Work</a>
          <a href="#">Why Insure?</a>
          <a href="#">Check Price</a>
          <a href="#">Reviews</a>
        </div>
        <div className="fm-footer-links">
          <p>Help Me</p>
          <a href="#">FAQ</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
        <div className="fm-footer-links">
          <p>Contact</p>
          <a href="#">Sales</a>
          <a href="#">Support</a>
          <a href="#">Live Chat</a>
        </div>
        <div className="fm-footer-links">
          <p>Others</p>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Licenses</a>
        </div>
      </div>
    </div>
  </footer>
);

// Export
export default Footer;
