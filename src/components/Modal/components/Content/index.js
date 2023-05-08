import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Content from './Content.jsx';

const style = {
  container: {
    marginBottom: 18,
  },
};

const Component = withStyle(style)(Content);

Component.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Component;
