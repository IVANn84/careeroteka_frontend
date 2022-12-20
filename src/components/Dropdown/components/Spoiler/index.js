import withStyle from 'react-jss';

import Spoiler from './Spoiler.jsx';

const style = ({
    dropdown: {
        optionBackground,
        spoiler: {
            color,
        },
    },
}) => ({
    container: {
        display: 'flex',
        fontStyle: 'italic',
        padding: [13, 13, 13, 10],
        cursor: 'pointer',
        transition: 'background 0.2s ease-in',
        borderRadius: 8,
        color: ({mode}) => color[mode],
        
        '&:hover': {
            background: optionBackground.hovered,
        },
    },
});

export default withStyle(style)(Spoiler);