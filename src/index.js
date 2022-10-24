import React from 'react';
import {createRoot} from 'react-dom/client';
import Jss from 'jss';
import DefaultUnits from 'jss-plugin-default-unit';

import '../public/index.css';
import App from './App.jsx';

Jss.use(DefaultUnits());

createRoot(document.getElementById('root'))
    .render(<App/>);