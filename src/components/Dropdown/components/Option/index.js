import withStyle from 'react-jss';

import Option from './Option.jsx';

const style = ({
    dropdown: {
        optionBackground,
    },
}) => ({
    container: {
        display: 'flex',
        padding: 12,
        cursor: 'pointer',
        transition: 'background .2s ease-in',
        borderRadius: 8,
        background: ({isSelected}) => isSelected
            ? optionBackground.selected
            : optionBackground.default,
        
        '&:hover, &:focus': {
            background: optionBackground.hovered,
        },
    },
});

export default withStyle(style)(Option);