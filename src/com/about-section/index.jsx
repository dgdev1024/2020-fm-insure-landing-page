/**
 * @file com/about-section/index.jsx
 * Presents the "We're Different" section.
 */

// Imports
import React from 'react';
import IconSnappy from '../../img/icon-snappy-process.svg';
import IconAffordable from '../../img/icon-affordable-prices.svg';
import IconPeople from '../../img/icon-people-first.svg';
import './index.scss';

// Component
const AboutSection = () => (
  <section className="fm-about-section">
    <div className="container">
      <div className="fm-top-border"></div>
      <h1>We're different</h1>
      <div className="fm-about-cards">
        <div className="fm-about-card">
          <img src={IconSnappy} alt="Snappy Process" />
          <h2>Snappy Process</h2>
          <p>
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms.
          </p>
        </div>
        <div className="fm-about-card">
          <img src={IconAffordable} alt="Affordable Prices" />
          <h2>Affordable Prices</h2>
          <p>
            We don't want you worrying about high monthly costs.
            Our prices may be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="fm-about-card">
          <img src={IconPeople} alt="People First" />
          <h2>People First</h2>
          <p>
            Our plans aren't full of conditions and clauses to prevent payouts.
            We make sure you're covered when you need it.
          </p>
        </div>
      </div>
      <div className="fm-find-out-more">
        <h1>
          Find out more about how we work.
        </h1>
        <a href="#">How We Work</a>
      </div>
    </div>
  </section>
);

// Export
export default AboutSection;
