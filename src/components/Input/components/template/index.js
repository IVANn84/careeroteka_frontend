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
        boxShadow: ({value}) => value && boxShadow,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 16,
        transition: 'box-shadow .2s',
        padding: ({value}) => value && [[1, 1]],
        border: ({error, value}) => value
            ? 0
            : error
                ? border.negative
                : border.default,
        opacity: ({isDisabled}) => isDisabled && 0.5,
        
        '& > input': {
            fontSize: 20,
            border: 0,
            width: '100%',
            padding: [padding, 0, padding, padding],
            color: ({error}) => error
                ? font.color.negative
                : font.color.regular,
            background: 'transparent',
            
            '&::placeholder': {
                userSelect: 'none',
                color: ({error}) => error
                    ? placeholder.negative
                    : placeholder.default,
            },
        },
    },
    
    actions: {
        display: 'flex',
        margin: [0, padding, 0, 8],
        color: ({error}) => error
            ? icon.color.negative
            : icon.color.default,
        
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
        marginTop: 5,
        fontSize: 15,
        color: font.color.negative,
        textAlign: 'end',
    },
});