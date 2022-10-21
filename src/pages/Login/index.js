import withStyle from 'react-jss';
import {connect} from 'react-redux';

import Login from './Login.jsx';
import connector from './connector';
import dispatcher from './dispatcher';

const style = {
    container: {
        margin: [60, 0, 130, 0],
    },
    error: {
        fontSize: 24,
    },
};

export default connect(connector, dispatcher)(withStyle(style)(Login));