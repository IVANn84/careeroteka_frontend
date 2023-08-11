import PropTypes from 'prop-types';

import Content from './Content.jsx';

const Component = Content;

Component.propTypes = {
  children: PropTypes.node.isRequired,
  hasDivider: PropTypes.bool,
  className: PropTypes.string,
};

export default Component;
