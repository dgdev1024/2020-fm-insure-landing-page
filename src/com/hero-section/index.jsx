/**
 * @file com/hero-section/index.jsx
 * Presents the introductory hero section.
 */

// Imports
import React from 'react';
import './index.scss';

// Component
const HeroSection = () => (
  <section className="fm-hero-section">
    <div className="container">
      <div className="fm-hero-image"></div>
      <div className="fm-hero-caption">
        <div className="fm-top-border"></div>
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster.
          We blend our expertise and technology to help you
          find the plan that's right for you.
          Ensure you and your loved ones are protected.
        </p>
        <a href="#">View Plans</a>
      </div>
    </div>
  </section>
);

// Export
export default HeroSection;
