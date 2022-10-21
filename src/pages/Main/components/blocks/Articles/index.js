import withStyle from 'react-jss';
import Articles from './Articles.jsx';

const style = ({font, layout, iconButton}) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 35,
        fontWeight: font.weight.bold,
        fontSize: 48,
    },
    navigation: {
        color: iconButton.color.default,
        '& > svg': {
            cursor: 'pointer',
            width: 48,
            transition: 'color .2s',
            
            '&:hover': {
                color: iconButton.color.hovered,
            },
            
            '&:active': {
                color: iconButton.color.focused,
            },
        },
    },
    //TODO: вынести слайдер статей в отдельный компонент
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
            
            '&:not(:first-child)': {
                marginLeft: 30,
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
        header: {
            fontSize: 32,
            marginBottom: 31,
        },
        navigation: {
            display: 'none',
        },
        slider: {
            padding: [20, layout.paddingX.mobile],
            margin: [-20, -layout.paddingX.mobile],
        },
        item: {
            width: 350,
            height: 350,
        },
    },
});

export default withStyle(style)(Articles);
