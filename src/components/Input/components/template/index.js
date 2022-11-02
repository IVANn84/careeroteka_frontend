export const style = ({
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
        width: '100%',
    },
    input: {
        background,
        boxShadow: ({value, error}) => value && !error && boxShadow,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 16,
        transition: 'box-shadow .2s',
        padding: ({value, error}) => value && !error && [[1, 1]],
        border: ({error, value}) => value
            ? error
                ? border.negative
                : 0
            : error
                ? border.negative
                : border.default,
        opacity: ({isDisabled}) => isDisabled && 0.5,
        
        '&:focus-within': {
            padding: ({error}) => !error && [[1, 1]],
            border: ({error}) => error
                ? border.negative
                : 0,
            boxShadow: ({error}) => !error && boxShadow,
        },
        
        '& > input': {
            fontSize: 20,
            border: 0,
            width: '100%',
            padding: [padding, 0, padding, padding],
            color: font.color.regular,
            background: 'transparent',
            
            '&::placeholder': {
                userSelect: 'none',
                color: placeholder.default,
            },
        },
    },
    
    actions: {
        display: 'flex',
        margin: [0, padding, 0, 8],
        color: icon.color.default,
        
        '& > *': {
            border: 0,
            width: 24,
            height: 24,
            margin: [0, 2],
            cursor: ({isDisabled}) => !isDisabled && 'pointer',
            transition: 'opacity .2s',
            
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
    },
    
    error: {
        margin: [5, 0, 0, 15],
        fontSize: 15,
        color: font.color.negative,
    },
});