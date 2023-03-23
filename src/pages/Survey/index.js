import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Survey from './Survey.jsx';

const style = {
    container: {
        display: 'flex',
        flex: 1,
        margin: [80, 0, 60, 0],
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            margin: [60, 0, 50, 0],
        },
    },
};

export default withStyle(style)(observer(Survey));