/**
 * @file com/header/index.jsx
 * Presents a header bar fixed at the top of the screen.
 */

// Imports
import React, { useRef } from 'react';
import InsureLogo from '../../img/icon-logo.svg';
import './index.scss';

// Component
const Header = () => {
  const nav = useRef(null);
  const navToggle = useRef(null);

  const toggleNav = () => {
    const { classList: navClassList } = nav.current;
    const { classList: toggleClassList } = navToggle.current;
    const { classList: bodyClassList } = document.body;

    if (navClassList.contains('shown')) {
      navClassList.remove('shown');
      toggleClassList.remove('shown');
      bodyClassList.remove('no-scroll');
    } else {
      navClassList.add('shown');
      toggleClassList.add('shown');
      bodyClassList.add('no-scroll');
    }
  };
  
  return (
    <header>
      <div className="container">
        <img src={InsureLogo} alt="Insure" />
        <button 
          aria-label="Toggle Navigation" 
          type="button"
          ref={navToggle}
          onClick={toggleNav} 
        />
        <nav ref={nav}>
          <a href="#">How We Work</a>
          <a href="#">Blog</a>
          <a href="#">Account</a>
          <a id="view-plans" href="#">View Plans</a>
        </nav>
      </div>
    </header>
  );
};

// Export
export default Header;
