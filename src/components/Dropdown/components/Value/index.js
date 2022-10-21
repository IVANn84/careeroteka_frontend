import withStyle from 'react-jss';

import Value from './Value.jsx';

const style = ({
    input: {
        background,
        boxShadow,
        border,
        icon,
        placeholder,
        padding,
    },
    font,
}) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background,
        boxShadow: ({selectedValue, isOpen}) => (selectedValue || isOpen) && boxShadow,
        borderRadius: ({isOpen, isReversedY}) => isOpen
            ? isReversedY
                ? [[0, 0, 16, 16]]
                : [[16, 16, 0, 0]]
            : 16,
        padding: ({selectedValue, isOpen}) => selectedValue || isOpen
            ? [[padding + 1, 1, padding + 1, padding + 1]]
            : [[padding, 0, padding, padding]],
        fontSize: 20,
        color: ({error, selectedValue}) => selectedValue
            ? error
                ? font.color.negative
                : font.color.regular
            : error
                ? placeholder.negative
                : placeholder.default,
        cursor: ({isDisabled}) => !isDisabled && 'pointer',
        border: ({error, selectedValue, isOpen}) => (selectedValue || isOpen)
            ? 0
            : error
                ? border.negative
                : border.default,
        opacity: ({isDisabled}) => isDisabled && 0.5,
        transition: 'box-shadow .2s',
        userSelect: ({selectedValue}) => !selectedValue && 'none',
    },
    
    button: {
        margin: [0, padding, 0, 8],
        color: ({error}) => error
            ? icon.color.negative
            : icon.color.default,
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
});

export default withStyle(style)(Value);