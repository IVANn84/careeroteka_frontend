import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

Icon.propTypes = {
    name: PropTypes.oneOf(['vk', 'telegram']),
    size: PropTypes.number,
};

Icon.defaultProps = {
    size: 32,
};

export default Icon;
