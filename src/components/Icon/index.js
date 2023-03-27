import Icon from './Icon.jsx';
import PropTypes from 'prop-types';

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
};

Icon.defaultProps = {
    size: 32,
};

export default Icon;
