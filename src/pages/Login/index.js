import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Login from './Login.jsx';

const style = {
    container: {
        margin: [60, 0, 130, 0],
    },
    error: {
        fontSize: 24,
    },
};

export default withStyle(style)(observer(Login));