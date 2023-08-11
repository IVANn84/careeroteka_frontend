import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Header from './Header.jsx';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 48,

    '& > svg': {
      height: 24,
      width: 24,
      cursor: 'pointer',
      transition: 'opacity .2s',

      '&:hover': {
        opacity: '.7',
      },

      '&:focus': {
        outline: 'none',
        opacity: '.7',
      },

      '&:active': {
        transition: 'none',
        opacity: '.9',
      },
    },
  },
};

const Component = withStyle(style)(Header);

Component.propTypes = {
  children: PropTypes.node.isRequired,
  hasDivider: PropTypes.bool,
  className: PropTypes.string,
};

export default Component;
