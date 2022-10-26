import withStyle from 'react-jss';

import DefaultLayout from './DefaultLayout.jsx';

const style = ({layout, font, background}) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: [30, layout.paddingX.desktop, 70, layout.paddingX.desktop],
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Montserrat',
    },
    headerTitle: {
        fontStyle: 'normal',
        fontWeight: font.weight.bold,
        fontSize: 24,
    },
    footerContainer: {
        minHeight: 50,
    },
    contentContainer: {
        position: 'relative',
        flex: 1,
    },
    footer: {
        fontFamily: 'Montserrat',
        display: 'flex',
        justifyContent: 'space-between',
        background: background.dark,
        boxShadow: [0, 4, 20, 2, 'rgba(0, 0, 0, 0.1)'],
        borderRadius: 32,
        padding: [0, 30],
        color: font.color.light,
    },
    footerLogo: {
        margin: [25, 0, 40, 0],
    },
    footerTitle: {
        fontFamily: 'Montserrat',
        display: 'inline-block',
        fontStyle: 'normal',
        fontWeight: font.weight.bold,
        fontSize: 25,
    },
    footerLinksDesktop: {
        marginTop: 20,
        
        '& > *:not(:first-child)': {
            marginLeft: 15,
        },
    },
    footerLinksMobile: {
        display: 'none',
        marginTop: 20,
        
        '& > *:not(:first-child)': {
            marginLeft: 15,
        },
    },
    footerNavigation: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: font.weight.regular,
        
        '& > *:not(:first-child)': {
            marginLeft: 25,
        },
    },
    copyright: {
        fontFamily: 'Montserrat',
        display: 'flex',
        fontSize: 18,
        justifyContent: 'space-between',
        marginTop: 25,
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            padding: [16, layout.paddingX.mobile, 100, layout.paddingX.mobile],
        },
        footer: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: [35, 25],
            color: font.color.light,
        },
        footerLogo: {
            margin: [0, 0, 26, 0],
        },
        footerNavigation: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            
            '& > *:not(:first-child)': {
                marginLeft: 0,
                marginTop: 25,
            },
        },
        footerLinksDesktop: {
            display: 'none',
        },
        footerLinksMobile: {
            display: 'block',
        },
        copyright: {
            marginTop: 35,
            flexDirection: 'column-reverse',
            
            '& > span:not(:last-child)': {
                marginTop: 15,
            },
        },
    },
});

export default withStyle(style)(DefaultLayout);
