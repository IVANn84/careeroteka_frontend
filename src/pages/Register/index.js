import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Register from './Register.jsx';

const style = {
  container: {
    margin: '0 auto',
    width: 470,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  title: {
    maxWidth: 770,
    textAlign: 'center',
  },
  inputs: {
    margin: '0 auto',
    width: '100%',
    marginTop: 32,
    marginBottom: 32,

    '& > *:not(:first-child)': {
      marginTop: 16,
    },
  },
  button: {
    width: '100%',
  },
  links: {
    width: 322,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& > *': {
      marginTop: 25,
      marginBottom: 14,
    },
  },
  link: {
    position: 'relative',
    cursor: 'pointer',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 1,
      right: 1,
      bottom: -2,
      height: 1,
      width: '100%',
      margin: 'auto',
      background: '#000',
      transition: 'width .2s',
    },

    '&:hover::after, &:focus-visible::after': {
      width: '90%',
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: '100%',
    },
  },
};

export default withStyle(style)(observer(Register));
