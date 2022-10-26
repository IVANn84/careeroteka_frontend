import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import RequireAuth from './RequireAuth.jsx';

import connector from './connector';

export default withRouter(connect(connector)(RequireAuth));
