import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Login from './Login';

const style = ({ font }) => ({
  container: {
    margin: '0 auto',
    width: 470,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  inputs: {
    margin: '0 auto',
    width: '100%',
    marginTop: 32,

    '& > *:nth-child(2)': {
      marginTop: 20,
    },
  },
  button: {
    width: '100%',
    marginTop: 32,
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
  },
  link: {
    position: 'relative',
    cursor: 'pointer',
    transition: 'color .2s',
    marginTop: 32,
    marginBottom: 16,

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
      transition: 'background .2s',
    },

    '&:hover, &:focus-visible': {
      color: font.color.alternative,
    },

    '&:hover::after, &:focus-visible::after': {
      background: font.color.alternative,
    },
  },
  registration: {
    textAlign: 'center',
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: '100%',
    },
    inputs: {
      marginTop: 24,

      '& > *:not(:first-child)': {
        marginTop: 14,
      },
    },
    link: {
      marginTop: 14,
    },
  },
});

export default withStyle(style)(observer(Login));
