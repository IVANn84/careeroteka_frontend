import {forwardRef} from 'react';
import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Professions from './Professions.jsx';

const style = ({font}) => ({
    header: {
        marginBottom: 35,
        
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
        minWidth: 305,
    },
    
    '@media screen and (max-device-width: 576px)': {
        header: {
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
            minWidth: 'auto',
            width: '100%',
        },
    },
});

export default withStyle(style)(observer(forwardRef(Professions)));
