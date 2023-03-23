import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Step2 from './Step2.jsx';

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
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 40,
        
        '& > *:not(:last-child)': {
            marginRight: 20,
        },
    },
    directionSearchInput: {
        width: 470,
    },
    gradesDropdown: {
        minWidth: 300,
    },
    actions: {
        marginLeft: 'auto',
        
        '& > *:not(:last-child)': {
            marginRight: 30,
        },
    },
};

export default withStyle(style)(observer(Step2));
