import withStyle from 'react-jss';

import Header from './Header';

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

  '@media screen and (max-device-width: 576px)': {
    container: {
      marginBottom: 32,
      padding: [0, 16],
    },
  },
};

const Component = withStyle(style)(Header);

export default Component;
