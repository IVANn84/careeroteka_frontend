import withStyle from 'react-jss';
import Articles from './Articles.jsx';

const style = ({layout}) => ({
    slider: {
        whiteSpace: 'nowrap',
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        padding: [20, layout.paddingX.desktop],
        margin: [-20, -layout.paddingX.desktop],
        
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        
        '& > a': {
            display: 'inline-block',
            width: 370,
            height: 370,
            boxShadow: [0, 4, 20, 2, 'rgba(0, 0, 0, 0.1)'],
            borderRadius: 32,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            transition: 'transform .2s, box-shadow .2s',
            
            '&:not(:first-child)': {
                marginLeft: 30,
            },
            
            '&:hover, &:focus-visible': {
                transform: 'translateY(-5px)',
                boxShadow: [[0, 8, 20, 2, 'rgba(0, 0, 0, .1)']],
            },
        },
    },
    item: {
        display: 'inline-block',
        width: 370,
        height: 370,
        boxShadow: [0, 4, 20, 2, 'rgba(0, 0, 0, 0.1)'],
        borderRadius: 32,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    
    '@media screen and (max-device-width: 576px)': {
        slider: {
            padding: [20, layout.paddingX.mobile],
            margin: [-20, -layout.paddingX.mobile],
            
            '& > a:hover, & > a:focus-visible': {
                transform: 'translateY(0)',
                boxShadow: 'none',
            },
        },
        item: {
            width: 350,
            height: 350,
        },
    },
});

export default withStyle(style)(Articles);
