import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Step1 from './Step1.jsx';

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
        textAlign: 'center',
        marginBottom: 40,
    },
    resumeContainer: {
        width: 650,
    },
    resumeTitle: {
        textAlign: 'center',
    },
    resumeDescription: {
        textAlign: 'center',
        margin: [24, 0, 40, 0],
    },
    fields: {
        width: 470,
        marginBottom: 90,
    },
    optionAddInfo: {
        color: 'rgba(0, 0, 0, 0.6)',
    },
    actions: {
        marginLeft: 'auto',
    },
    inputs: {
        '& > *:not(:first-child)': {
            marginTop: 20,
        },
    },
};

export default withStyle(style)(observer(Step1));
