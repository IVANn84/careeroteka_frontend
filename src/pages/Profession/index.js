import withStyle from 'react-jss';
import {observer} from 'mobx-react-lite';

import Profession from './Profession.jsx';

const style = {
    container: {
        margin: [60, 0, 100, 0],
        
        '& > *': {
            marginBottom: 70,
        },
    },
    
    inlineBlocks: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridColumnGap: 30,
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            margin: [60, 0, 50, 0],
    
            '& > *': {
                marginBottom: 60,
            },
        },
        
        inlineBlocks: {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridRowGap: 60,
        },
    },
};

export default withStyle(style)(observer(Profession));