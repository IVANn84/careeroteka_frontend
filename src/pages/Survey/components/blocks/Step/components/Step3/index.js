import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Step3 from './Step3.jsx';

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: [0, 'auto'],
    },
    header: {
        width: 750,
        textAlign: 'center',
        margin: [0, 'auto'],
        
        '& > h1': {
            marginBottom: 24,
        },
        
        '& > p': {
            marginBottom: 40,
        },
    },
    fields: {
        maxWidth: '70%',
        marginBottom: 90,
    },
    inputs: {
    },
    skillSearchInput: {
        width: 470,
        margin: [0, 'auto', 40, 'auto'],
    },
    actions: {
        marginLeft: 'auto',
    
        '& > *:not(:last-child)': {
            marginRight: 30,
        },
    },
};

export default withStyle(style)(observer(Step3));
