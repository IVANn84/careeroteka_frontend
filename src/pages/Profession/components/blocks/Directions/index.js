import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';
import {memo} from 'react';

import Directions from './Directions.jsx';

const style = ({layout}) => ({
    header: {
        marginBottom: 24,
    },
    selections: {
        display: 'flex',
        
        '& > *:not(:first-child)': {
            marginLeft: 25,
        },
    },
    gradesDropdown: {
        minWidth: 300,
    },
    directionsDropdown: {
        minWidth: 350,
    },
    directionDescription: {
        marginTop: 36,
    },
    sticky: {
        left: 0,
        right: 0,
        width: '100vw !important',
        // При изменении отступов по Y или высоты, нужно изменить вычитаемое в функции onClickTellAboutProfession в Main блоке
        padding: [36, 0],
        paddingLeft: layout.paddingX.desktop,
        background: 'rgba(242, 242, 243, 0.7)',
        zIndex: 1,
    },
    
    '@media screen and (max-device-width: 576px)': {
        gradesDropdown: {
            minWidth: 'auto',
        },
        directionsDropdown: {
            minWidth: 'auto',
            marginTop: 24,
        },
        selections: {
            flexDirection: 'column',
            
            '& > *': {
                width: '100%',
                
                '&:not(:first-child)': {
                    marginTop: 16,
                    marginLeft: 0,
                },
            },
        },
        sticky: {
            padding: [5, layout.paddingX.mobile],
        },
    },
});

export default memo(withStyle(style)(observer(Directions)));
