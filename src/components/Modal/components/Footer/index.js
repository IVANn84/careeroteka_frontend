import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Footer from './Footer.jsx';

const style = {
  container: {
    marginTop: 36,
  },
  '@media screen and (max-device-width: 576px)': {
    container: {
      marginTop: 24,
      padding: [0, 16],
    },
  },
};

const Component = withStyle(style)(Footer);

Component.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Component;
