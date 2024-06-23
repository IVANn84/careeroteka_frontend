import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import PasswordRecoveryConfirmation from './PasswordRecoveryConfirmation';

const style = ({ font }) => ({
  container: {
    margin: '0 auto',
    width: 470,
    display: 'flex',
    flexDirection: 'column',
  },
  container_success: {
    margin: '0 auto',
    width: 502,
  },
  title: {
    textAlign: 'center',
  },
  inputs: {
    margin: '0 auto',
    width: '100%',
    marginTop: 32,
    marginBottom: 32,

    '& > *:nth-child(2)': {
      marginTop: 20,
    },
  },
  button: {
    width: '100%',
    marginTop: 32,
  },
  links: {
    margin: '0 auto',
  },
  link: {
    position: 'relative',
    cursor: 'pointer',
    transition: 'color .2s',
    marginTop: 26,
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
  info: {
    marginTop: 24,
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: '100%',
    },
    container_success: {
      width: '100%',
    },
    inputs: {
      marginTop: 24,
      marginBottom: 14,
    },
  },
});

export default withStyle(style)(observer(PasswordRecoveryConfirmation));
