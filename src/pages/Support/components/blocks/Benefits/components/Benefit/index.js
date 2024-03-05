import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Benefit from './Benefit.jsx';

const style = {
  container: {
    display: 'flex',
    marginLeft: 135,
    marginRight: 135,
    gap: 71,
    alignItems: 'center',
  },
  image: {
    maxWidth: 729,
  },
  title: {
    color: ({ color }) => color,
    marginBottom: 20,
  },
  link: {
    display: 'block',
    color: ({ color }) => color,
    marginTop: 20,
  },
};

const Component = withStyle(style)(Benefit);

Component.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default Component;
