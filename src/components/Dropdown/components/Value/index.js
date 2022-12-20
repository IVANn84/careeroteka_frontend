import withStyle from 'react-jss';

import Value from './Value.jsx';

const style = ({
    input: {
        boxShadow,
        border: inputBorder,
        placeholder: inputPlaceholder,
        icon,
        padding,
    },
    dropdown: {
        color,
        placeholder,
        background,
        border,
    },
    font,
}) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: ({mode}) => background[mode],
        boxShadow: ({selectedValue, isOpen}) => (selectedValue || isOpen) && boxShadow,
        borderRadius: ({isOpen, isReversedY}) => isOpen
            ? isReversedY
                ? [[0, 0, 16, 16]]
                : [[16, 16, 0, 0]]
            : 16,
        padding: ({selectedValue, isOpen}) => selectedValue || isOpen
            ? [[padding.desktop.yAxis + 1, 1, padding.desktop.yAxis + 1, padding.desktop.xAxis + 1]]
            : [[padding.desktop.yAxis, 0, padding.desktop.yAxis, padding.desktop.xAxis]],
        color: ({error, selectedValue, mode}) => selectedValue
            ? error
                ? font.color.negative
                : color[mode]
            : error
                ? inputPlaceholder.negative
                : placeholder[mode],
        cursor: ({isDisabled}) => !isDisabled && 'pointer',
        border: ({error, selectedValue, isOpen, mode}) => (selectedValue || isOpen)
            ? 0
            : error
                ? inputBorder.negative
                : border[mode],
        opacity: ({isDisabled}) => isDisabled && 0.5,
        transition: 'box-shadow .2s',
        userSelect: ({selectedValue}) => !selectedValue && 'none',
    
        '@media screen and (max-device-width: 576px)': {
            padding: ({selectedValue, isOpen}) => selectedValue || isOpen
                ? [[padding.mobile.yAxis + 1, 1, padding.mobile.yAxis + 1, padding.mobile.xAxis + 1]]
                : [[padding.mobile.yAxis, 0, padding.mobile.yAxis, padding.mobile.xAxis]],
        },
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

export default withStyle(style)(Value);