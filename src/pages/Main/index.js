import withStyle from 'react-jss';
import {connect} from 'react-redux';

import Main from './Main.jsx';
import dispatcher from './dispatcher';

const style = {
    container: {
        margin: [60, 0, 130, 0],
        
        '& > *:not(:first-child)': {
            marginTop: 100,
        },
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            margin: [80, 0, 500, 0],
        
            '& > *:not(:first-child)': {
                marginTop: 80,
            },
        },
    },
};

export default connect(null, dispatcher)(withStyle(style)(Main));