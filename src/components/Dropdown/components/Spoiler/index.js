import withStyle from 'react-jss';
import PropTypes from 'prop-types';

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
        transition: 'background .2s ease-in',
        borderRadius: 8,
        color: ({mode}) => color[mode],
        
        '&:hover': {
            background: optionBackground.hovered,
        },
    },
});

const Component = withStyle(style)(Spoiler);

Component.propTypes = {
    children: PropTypes.node.isRequired,
    showNextButton: PropTypes.bool,
    size: PropTypes.number,
    classes: PropTypes.object,
};

Component.defaultProps = {
    showNextButton: true,
};

export default Component;