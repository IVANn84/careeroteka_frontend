import withStyle from 'react-jss';

import Main from './Main.jsx';

const style = {
    container: {
        margin: [60, 0, 100, 0],
        
        '& > *:not(:first-child)': {
            marginTop: 90,
        },
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            margin: [60, 0, 50, 0],
            
            '& > *:not(:first-child)': {
                marginTop: 60,
            },
        },
    },
};

export default withStyle(style)(Main);