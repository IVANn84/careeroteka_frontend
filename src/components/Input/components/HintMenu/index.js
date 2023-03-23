import withStyle from 'react-jss';

import Menu from './HintMenu.jsx';

const style = ({
    dropdown: {
        boxShadow,
        color,
        background,
        placeholder,
    },
    typography,
}) => ({
    container: {
        fontSize: typography.variants.B1.fontSize,
        lineHeight: typography.variants.B1.lineHeight,
        width: '100%',
        padding: [8, 18],
        position: 'absolute',
        top: ({isReversedY}) => isReversedY && 0,
        zIndex: 2,
        overflowY: 'hidden',
        transform: ({isReversedY}) => isReversedY && 'translateY(-100%)',
        background: background.light,
        color: color.light,
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
        
        '& > svg': {
            marginTop: 3,
        },
    },
    options: {
        flex: 1,
        overflowY: 'auto',
        minHeight: 1,
        scrollbarWidth: 'none',
        scrollbarHeight: 'none',
        
        '& > *:not(:first-child)': {
            marginTop: 3,
        },
        
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    placeholder: {
        display: 'block',
        color: placeholder.light.default,
        padding: 8,
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            fontSize: typography.variants.B2.fontSize,
            lineHeight: typography.variants.B2.lineHeight,
        },
    },
});

export default withStyle(style)(Menu);