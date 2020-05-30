/**
 * @file com/app/index.jsx
 * Our website's primary component.
 */

// Imports
import React from 'react';
import Header from '../header';
import HeroSection from '../hero-section';
import AboutSection from '../about-section';
import Footer from '../footer';
import './index.scss';

// Component
const App = () => (
  <main>
    <Header />
    <HeroSection />
    <AboutSection />
    <Footer />
  </main>
);

// Export
export default App;
