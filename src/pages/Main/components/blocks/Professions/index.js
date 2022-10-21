import withStyle from 'react-jss';
import {connect} from 'react-redux';

import Professions from './Professions.jsx';
import connector from './connector';

const style = ({font}) => ({
    header: {
        marginBottom: 35,
        fontWeight: font.weight.bold,
        fontSize: 48,
        
        '& span': {
            color: font.color.alternative,
        },
    },
    controls: {
        display: 'flex',
    },
    searchButton: {
        width: 570,
    },
    areasDropdown: {
        marginLeft: 30,
        width: 305,
    },
    
    '@media screen and (max-device-width: 576px)': {
        header: {
            fontSize: 32,
            marginBottom: 31,
        },
        controls: {
            flexDirection: 'column',
        },
        searchButton: {
            width: '100%',
        },
        areasDropdown: {
            marginLeft: 0,
            marginTop: 20,
            width: '100%',
        },
    },
});

export default connect(connector)(withStyle(style)(Professions));
