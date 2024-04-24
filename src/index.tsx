import { createRoot } from 'react-dom/client';
import React from 'react';
import VendorPrefixer from 'jss-plugin-vendor-prefixer';
import DefaultUnits from 'jss-plugin-default-unit';
import Jss from 'jss';

import App from './App';
import '../public/index.css';

Jss.use(
  DefaultUnits(),
  VendorPrefixer(),
);

createRoot(document.getElementById('root'))
  .render(<App />);
