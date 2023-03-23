import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Login from './Login.jsx';

const style = {
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
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            width: '100%',
        },
    },
};

export default withStyle(style)(observer(Login));