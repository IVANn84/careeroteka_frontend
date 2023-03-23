import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import DefaultLayout from './DefaultLayout.jsx';

const style = ({layout}) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: [30, layout.paddingX.desktop, 70, layout.paddingX.desktop],
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        flex: 1,
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            padding: [16, layout.paddingX.mobile, 100, layout.paddingX.mobile],
        },
    },
});

export default withStyle(style)(observer(DefaultLayout));
