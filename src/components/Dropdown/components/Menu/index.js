import withStyle from 'react-jss';

import Menu from './Menu.jsx';

const style = ({
    input: {
        background,
        placeholder,
    },
    dropdown: {
        boxShadow,
    },
    separator,
    font,
}) => ({
    container: {
        fontSize: 20,
        width: '100%',
        padding: [8, 18],
        paddingTop: ({isSearchable}) => isSearchable && 0,
        position: 'absolute',
        top: ({isReversedY}) => isReversedY && 0,
        zIndex: 2,
        overflowY: 'hidden',
        transform: ({isReversedY}) => isReversedY && 'translateY(-100%)',
        background,
        color: font.color.regular,
        pointerEvents: 'none',
        boxShadow: ({isReversedY}) => isReversedY
            ? boxShadow.reversed
            : boxShadow.default,
        borderRadius: ({isReversedY}) => isReversedY
            ? [[16, 16, 0, 0]]
            : [[0, 0, 16, 16]],
    },
    menu: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: ({isLoading}) => isLoading && 120,
        maxHeight: ({maxHeight}) => maxHeight,
        pointerEvents: 'initial',
    },
    options: {
        flex: 1,
        overflowY: 'auto',
        minHeight: 1,
        
        '& > *:not(:first-child)': {
            marginTop: 3,
        },
    },
    search: {
        padding: [13, 13, 13, 10],
        marginBottom: 8,
        justifyContent: 'space-between',
        borderBottom: [[1, 'solid', separator.color]],
        
        '& > input::placeholder': {
            userSelect: 'none',
            color: ({error}) => error
                ? placeholder.negative
                : placeholder.default,
        },
    },
    placeholder: {
        fontSize: 18,
        padding: 8,
    },
});

export default withStyle(style)(Menu);