import withStyle from 'react-jss';
import {memo} from 'react';
import PropTypes from 'prop-types';

import Courses from './Courses.jsx';

const style = ({font}) => ({
    slider: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridAutoColumns: 'min-content',
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        padding: [20, 64],
        margin: [-20, -64],
    
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        
        // Жалкая попытка сделать красивый скроллбар по макету
        // '&::-webkit-scrollbar': {
        //     height: 12,
        // },
        // '&::-webkit-scrollbar-track': {
        //     backgroundColor: '#CBCBCB',
        //     backgroundClip: 'padding-box',
        //     borderRight: [['solid', 64, 'rgba(242, 242, 243, 0)']],
        //     borderLeft: [['solid', 64, 'rgba(242, 242, 243, 0)']],
        // },
        // '&::-webkit-scrollbar-thumb': {
        //     backgroundColor: font.color.alternative,
        //     backgroundClip: 'padding-box',
        //     borderRight: [['solid', 64, 'rgba(242, 242, 243, 0)']],
        //     borderLeft: [['solid', 64, 'rgba(242, 242, 243, 0)']],
        // },
        // '&::-webkit-scrollbar-button': {
        //     width: 0,
        //     height: 0,
        //     display: 'none',
        // },
        // '&::-webkit-scrollbar-corner': {
        //     backgroundColor: 'transparent',
        // },
        
        '& > div': {
            display: 'inline-block',
            width: 270,
            boxShadow: [0, 4, 20, 2, 'rgba(0, 0, 0, 0.1)'],
            borderRadius: 16,
            background: '#FFF',
            whiteSpace: 'normal',
            cursor: 'pointer',
            transition: 'transform .2s, box-shadow .2s',
            
            '&:not(:first-child)': {
                marginLeft: 30,
            },
            
            '&:hover, &:focus-visible': {
                transform: 'translateY(-5px)',
                boxShadow: [[0, 8, 20, 2, 'rgba(0, 0, 0, .1)']],
            },
        },
        
        '& > svg': {
            display: 'inline-block',
            
            '&:not(:first-child)': {
                marginLeft: 30,
            },
        },
    },
    content: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    like: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: 30,
        transition: 'fill .1s',
        
        '&:hover': {
            fill: font.color.negative,
        },
    },
    logo: {
        borderRadius: [16, 16, 0, 0],
        height: 225,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        padding: [16, 16, 28, 16],
    },
    type: {
        color: '#343C45',
    },
    name: {
        display: 'block',
        wordBreak: 'break-word',
        margin: [8, 0, 16, 0],
    },
    rating: {
        height: 14,
        display: 'flex',
        color: font.color.alternative,
        
        '& > svg': {
            width: 14,
            display: 'inline-block',
            
            '&:not(:first-child)': {
                marginLeft: 8,
            },
        },
    },
    
    '@media screen and (max-device-width: 576px)': {
        slider: {
            padding: [20, 16],
            margin: [-20, -16],
            
            '& > a:hover, & > a:focus-visible': {
                transform: 'translateY(0)',
                boxShadow: 'none',
            },
        },
    },
});

const Component = memo(withStyle(style)(Courses));

Component.propTypes = {
    buttonRightRef: PropTypes.node,
    buttonLeftRef: PropTypes.node,
    courses: PropTypes.array,
    isLoading: PropTypes.bool,
    classes: PropTypes.object,
};

Component.defaultProps = {
    courses: [],
};

export default Component;