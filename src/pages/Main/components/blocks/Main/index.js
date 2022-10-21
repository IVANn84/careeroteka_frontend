import withStyle from 'react-jss';
import Main from './Main.jsx';

const style = ({font}) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    about: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        
        '& > h1': {
            fontWeight: font.weight.bold,
            fontSize: 56,
        },
        
        '& > span': {
            marginTop: 30,
            fontSize: 24,
        },
    },
    actions: {
        marginTop: 40,
        
        '& > button:not(:first-child)': {
            marginLeft: 12,
        },
    },
    image: {
        margin: ['auto', 0],
        width: 655,
    },
    
    '@media screen and (max-device-width: 576px)': {
        container: {
            flexDirection: 'column',
        },
        actions: {
            marginTop: 56,
            
            '& > button:not(:first-child)': {
                margin: [13, 0, 45, 0],
            },
        },
        about: {
            '& > h1': {
                fontSize: 52,
            },
            '& > span': {
                fontSize: 20,
            },
        },
        image: {
            margin: [0, 'auto'],
            width: 350,
        },
    },
});

export default withStyle(style)(Main);
