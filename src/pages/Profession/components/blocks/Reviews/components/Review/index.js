import withStyle from 'react-jss';

import Review from './Review.jsx';

const style = {
    rateTitle: {
        wordBreak: 'break-word',
    },
    stars: {
        height: 24,
        display: 'flex',
        color: '#EA4E1B',
    },
    
    '@media screen and (max-device-width: 576px)': {
        stars: {
            height: 14,
        },
    },
};

export default withStyle(style)(Review);