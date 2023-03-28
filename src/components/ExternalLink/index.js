import PropTypes from 'prop-types';

import ExternalLink from './ExternalLink.jsx';

ExternalLink.propTypes = {
    to: PropTypes.string,
    children: PropTypes.node,
    target: PropTypes.string,
};

ExternalLink.defaultProps = {
    target: '_blank',
};

export default ExternalLink;
