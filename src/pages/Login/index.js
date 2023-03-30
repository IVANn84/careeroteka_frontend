import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Login from './Login.jsx';

const style = ({font}) => ({
    container: {
        width: '40%',
        margin: 'auto',
    },
    title: {
        textAlign: 'center',
    },
    inputs: {
        marginTop: 32,
        marginBottom: 32,
        
        '& > *:not(:first-child)': {
            marginTop: 16,
        },
    },
    button: {
        width: '100%',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        '& > *': {
            marginTop: 25,
        },
    },
    link: {
        position: 'relative',
        cursor: 'pointer',
        transition: 'color .2s',
        
        '&::after': {
            content: '""',
            position: 'absolute',
            left: 1,
            right: 1,
            bottom: -2,
            height: 1,
            width: '100%',
            margin: 'auto',
            background: '#000',
            transition: 'background .2s',
        },
        
        '&:hover, &:focus-visible': {
            color: font.color.alternative,
        },
        
        '&:hover::after, &:focus-visible::after': {
            background: font.color.alternative,
        },
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            width: '100%',
        },
    },
});

export default withStyle(style)(observer(Login));