/**
 * @file index.jsx
 * The entry point for our web application.
 */

// Imports
import React from 'react';
import { render } from 'react-dom';
import App from './com/app';
import './index.scss';

// Mount Application
const mountNode = document.querySelector('#root');
render(<App />, mountNode);
