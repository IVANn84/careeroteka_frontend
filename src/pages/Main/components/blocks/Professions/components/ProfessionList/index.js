import withStyle from 'react-jss';
import {memo} from 'react';

import ProfessionList from './ProfessionList.jsx';

const style = ({font}) => ({
    professionsContainer: {
        marginTop: 50,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridGap: '40px',
        
        '& > span': {
            fontSize: 24,
        },
    },
    professionItem: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        padding: 25,
        borderRadius: 32,
        cursor: 'pointer',
        border: [1, 'solid', '#E5E5E5'],
        width: 260,
        height: 260,
        background: 'linear-gradient(43.17deg, #F4F4F4 3.67%, #FEFEFE 67.4%)',
        transition: 'transform .2s, box-shadow .2s',
        
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: [[0, 8, 20, 2, 'rgba(0, 0, 0, .1)']],
        },
    },
    professionTitle: {
        '& > p': {
            fontSize: 24,
            fontWeight: font.weight.medium,
        },
        '& > span': {
            display: 'block',
            marginTop: 10,
            fontSize: 16,
            color: font.color.secondary,
        },
    },
    professionMinSalary: {
        width: '100%',
        textAlign: 'end',
        fontSize: 24,
        fontWeight: font.weight.medium,
    },
    
    '@media screen and (max-device-width: 576px)': {
        professionsContainer: {
            gridGap: '30px',
        },
        professionItem: {
            width: '100%',
        },
    },
});

export default memo(withStyle(style)(ProfessionList));
