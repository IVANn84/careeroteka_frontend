import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Footer from './Footer.jsx';

const style = {
  container: {
    marginTop: 36,
  },
};

const Component = withStyle(style)(Footer);

Component.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Component;
