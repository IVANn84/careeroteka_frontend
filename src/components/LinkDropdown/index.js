import {memo} from 'react';
import withStyle from 'react-jss';

import LinkDropdown from './LinkDropdown.jsx';
import PropTypes from 'prop-types';

export const Style = ({font}) => ({
    link: {
        display: 'inline-block',
        cursor: 'pointer',
        marginTop: 18,
        color: font.color.alternative,
        position: 'relative',
        
        '&::after': {
            content: '""',
            position: 'absolute',
            left: 1,
            right: 1,
            bottom: -2,
            height: 2,
            width: '90%',
            margin: 'auto',
            background: font.color.alternative,
            transition: 'width .2s',
        },
        
        '&:hover::after, &:focus-visible::after': {
            width: '100%',
        },
    },
});

// Свернуть/развернуть длинный текст или список
const Component = memo(withStyle(Style)(LinkDropdown));

Component.propTypes = {
    children: PropTypes.node.isRequired,
    quantity: PropTypes.number,
    expandText: PropTypes.string,
};

Component.defaultProps = {
    quantity: 50,
    expandText: 'Подробнее',
};

export default Component;