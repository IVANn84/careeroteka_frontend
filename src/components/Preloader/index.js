import withStyle from 'react-jss';

import Preloader from './Preloader.jsx';

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        minHeight: ({indicatorSize = 60}) => `${indicatorSize * 2}px`,
        position: ({isAbsolute}) => isAbsolute && 'absolute',
        background: ({isAbsolute}) => isAbsolute && 'rgba(255, 255, 255, .5)',
        top: 0,
        zIndex: '1',
    },
    
    indicator: {
        margin: 'auto',
        width: ({indicatorSize = 60}) => `${indicatorSize}px`,
        height: ({indicatorSize = 60}) => `${indicatorSize}px`,
        borderRadius: '50%',
        borderTop: '8px solid rgba(0, 0, 0, 0.1)',
        borderRight: '8px solid rgba(0, 0, 0, 0.1)',
        borderBottom: '8px solid rgba(0, 0, 0, 0.1)',
        borderLeft: '8px solid rgba(0, 0, 0, 0.2)',
        transform: 'translateZ(0)',
        animation: '$spin 3.1s infinite linear',
    },
    
    '@keyframes spin': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        },
    },
};

export default withStyle(style)(Preloader);
