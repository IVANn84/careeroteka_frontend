import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';
import {memo} from 'react';

import Reviews from './Reviews.jsx';

const style = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '0 30px',
    },
    header: {
        marginBottom: 24,
    },
    description: {
        marginBottom: 36,
    },
    rates: {
        display: 'grid',
        gridTemplateColumns: '1fr 120px auto',
        gridGap: '25px 32px',
        alignContent: 'start',
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            display: 'block',
        },
        header: {
            marginBottom: 18,
        },
        description: {
            marginBottom: 20,
        },
        rates: {
            gridTemplateColumns: '1fr 70px auto',
            gridGap: '25px 20px',
            alignContent: 'start',
        },
    },
};

export default memo(withStyle(style)(observer(Reviews)));
