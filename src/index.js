import React from 'react';
import ReactDOM from 'react-dom';
import Jss from 'jss';
import DefaultUnits from 'jss-plugin-default-unit';

import '../public/index.css';
import App from './App.jsx';

Jss.use(DefaultUnits());

ReactDOM.render(<App/>, document.getElementById('root'));
