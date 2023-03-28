import {memo} from 'react';
import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import ArticlesSlider from './ArticlesSlider.jsx';

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
            width: 260,
            height: 260,
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
    
    '@media screen and (max-device-width: 576px)': {
        slider: {
            padding: [20, layout.paddingX.mobile],
            margin: [-20, -layout.paddingX.mobile],
            
            '& > a:hover, & > a:focus-visible': {
                transform: 'translateY(0)',
                boxShadow: 'none',
            },
        },
    },
});

// Слайдер статей
const Component = memo(withStyle(style)(ArticlesSlider));

Component.propTypes = {
    buttonRightRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
    buttonLeftRef: PropTypes.shape({current: PropTypes.instanceOf(Element)}),
    currentArticleId: PropTypes.number,
    classes: PropTypes.object,
};

export default Component;