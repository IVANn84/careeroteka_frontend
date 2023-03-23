import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Step0 from './Step0.jsx';

const style = ({font}) => ({
    container: {
        display: 'flex',
        width: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
    },
    center: {
        textAlign: 'center',
    },
    row: {
        marginBottom: 24,
    },
    blue: {
        color: font.color.alternative,
    },
    button: {
        marginTop: 45,
    },
});

export default withStyle(style)(observer(Step0));
