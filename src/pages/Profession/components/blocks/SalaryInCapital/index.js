import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';
import {memo} from 'react';

import SalaryInCapital from './SalaryInCapital.jsx';

const style = ({font}) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        marginBottom: 40,
        display: 'flex',
        justifyContent: 'space-between',
    },
    negative: {
        color: font.color.negative,
    },
    positive: {
        color: font.color.alternative,
    },
    
    '@media screen and (max-device-width: 576px)': {
        header: {
            marginBottom: 18,
        },
    },
});

export default memo(withStyle(style)(observer(SalaryInCapital)));