import Icon from './Icon.jsx';
import PropTypes from 'prop-types';

Icon.propTypes = {
    name: PropTypes.oneOf(['vk', 'telegram']),
    size: PropTypes.number,
};

Icon.defaultProps = {
    size: 32,
};

export default Icon;
