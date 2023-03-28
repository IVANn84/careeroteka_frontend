import withStyle from 'react-jss';
import PropTypes from 'prop-types';

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

const Component = withStyle(style)(Option);

Component.propTypes = {
    value: PropTypes.node,
    onSelect: PropTypes.func,
    classes: PropTypes.object,
};

export default Component;