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
    title: {
        width: 900,
        textAlign: 'center',
        margin: [0, 'auto'],
        marginBottom: 40,
    },
    fields: {
        maxWidth: '70%',
        marginBottom: 90,
    },
    areaSearchInput: {
        margin: [0, 'auto', 40, 'auto'],
        width: 470,
    },
    actions: {
        marginLeft: 'auto',
        
        '& > *:not(:last-child)': {
            marginRight: 30,
        },
    },
};

export default withStyle(style)(observer(Step2));
