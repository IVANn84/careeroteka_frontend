/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createRoot } from 'react-dom/client';
import Jss from 'jss';
import DefaultUnits from 'jss-plugin-default-unit';
import VendorPrefixer from 'jss-plugin-vendor-prefixer';

import '../public/index.css';
import App from './App.jsx';

Jss.use(
  DefaultUnits(),
  VendorPrefixer(),
);

createRoot(document.getElementById('root'))
  .render(<App />);
