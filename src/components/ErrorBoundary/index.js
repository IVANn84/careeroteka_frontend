import PropTypes from 'prop-types';

import ErrorBoundary from './ErrorBoundary.jsx';

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default ErrorBoundary;
