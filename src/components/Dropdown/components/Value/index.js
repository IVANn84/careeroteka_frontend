import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Value from './Value.jsx';

const style = ({
    dropdown: {
        icon,
        padding,
        color,
        placeholder,
        background,
        border,
        valueBoxShadow,
        requireStarColor,
    },
    font,
}) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: ({mode}) => background[mode],
        boxShadow: ({isOpen}) => isOpen && valueBoxShadow,
        borderRadius: ({isOpen, isReversedY}) => isOpen
            ? isReversedY
                ? [[0, 0, 16, 16]]
                : [[16, 16, 0, 0]]
            : 16,
        padding: ({isOpen, mode}) => isOpen && mode !== 'primary'
            ? [[padding.desktop.yAxis + 1, 1, padding.desktop.yAxis + 1, padding.desktop.xAxis + 1]]
            : [[padding.desktop.yAxis, 0, padding.desktop.yAxis, padding.desktop.xAxis]],
        color: ({error, selectedValue, mode}) => selectedValue
            ? error
                ? font.color.negative
                : color[mode]
            : error
                ? placeholder[mode]?.negative
                : placeholder[mode]?.default,
        cursor: ({isDisabled}) => !isDisabled && 'pointer',
        
        border: ({error, selectedValue, isOpen, mode}) => isOpen
            ? 0
            : selectedValue
                ? error
                    ? border[mode]?.negative
                    : border[mode]?.filled
                : error
                    ? border[mode]?.negative
                    : border[mode]?.default,
        opacity: ({isDisabled}) => isDisabled && 0.5,
        transition: 'box-shadow .2s',
        userSelect: ({selectedValue}) => !selectedValue && 'none',
    
        '&:focus': {
            border: ({mode, isOpen, error}) => isOpen
                ? 0
                : error
                    ? border[mode]?.negative
                    : border[mode]?.filled,
        },
        
        '@media screen and (max-device-width: 576px)': {
            padding: ({selectedValue, isOpen}) => selectedValue || isOpen
                ? [[padding.mobile.yAxis + 1, 1, padding.mobile.yAxis + 1, padding.mobile.xAxis + 1]]
                : [[padding.mobile.yAxis, 0, padding.mobile.yAxis, padding.mobile.xAxis]],
        },
    },
    requireStar: {
        color: requireStarColor,
    },
    
    button: {
        margin: [0, padding.desktop.xAxis, 0, 8],
        color: ({error, mode}) => error
            ? icon.color.negative
            : color[mode],
        transform: ({isOpen}) => isOpen ? 'rotate(180deg)' : null,
        transition: 'opacity .2s, transform .2s',
        
        '&:hover': {
            opacity: ({isDisabled}) => !isDisabled && '.7',
        },
        
        '&:focus': {
            outline: 'none',
        },
        
        '&:active': {
            transition: 'none',
            opacity: ({isDisabled}) => !isDisabled && '.9',
        },
    },
    
    '@media screen and (max-device-width: 576px)': {
        button: {
            margin: [0, padding.mobile.xAxis, 0, 8],
        },
    },
});

const Component = withStyle(style)(Value);

Component.propTypes = {
    selectedValue: PropTypes.string,
    placeholder: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,   
    toggle: PropTypes.func,
    classes: PropTypes.object,
};

export default Component;