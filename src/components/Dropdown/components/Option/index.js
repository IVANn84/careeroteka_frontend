import withStyle from 'react-jss';

import Option from './Option.jsx';

const style = ({
    dropdown: {
        background,
    },
}) => ({
    container: {
        display: 'flex',
        padding: [13, 13, 13, 10],
        cursor: 'pointer',
        transition: 'background 0.2s ease-in',
        borderRadius: 8,
        background: ({isSelected}) => isSelected
            ? background.selected
            : background.default,
        
        '&:hover': {
            background: background.hovered,
        },
    },
});

export default withStyle(style)(Option);