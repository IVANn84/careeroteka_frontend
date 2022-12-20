import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';
import {memo} from 'react';

import Skills from './Skills.jsx';

const style = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '17px',
    },
    header: {
        marginBottom: 24,
    },
    skill: {
        '& > span > span': {
            marginLeft: 8,
        },
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            gap: '8px',
        },
        
        header: {
            marginBottom: 18,
        },
    },
};

export default memo(withStyle(style)(observer(Skills)));
