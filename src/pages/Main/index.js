import withStyle from 'react-jss';

import Main from './Main.jsx';

const style = {
    container: {
        '& > *:not(:first-child)': {
            marginTop: 90,
        },
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            '& > *:not(:first-child)': {
                marginTop: 60,
            },
        },
    },
};

export default withStyle(style)(Main);