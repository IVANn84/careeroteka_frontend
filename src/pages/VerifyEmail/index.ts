import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import VerifyEmail from './VerifyEmail';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    maxWidth: 632,
    minWidth: 554,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  center: {
    textAlign: 'center',
  },
  row: {
    marginBottom: 32,
  },
  description: {
    width: '98%',
    marginBottom: 36,
  },
  request: {
    marginBottom: 16,
  },
  link: {
    position: 'relative',
    cursor: 'pointer',
    transition: 'color .2s',

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
  disabledLink: {
    cursor: 'not-allowed',
    opacity: 0.6,

    '&:hover, &:focus-visible': {
      color: 'inherit',
    },

    '&:hover::after, &:focus-visible::after': {
      background: '#000',
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      maxWidth: '100%',
      minWidth: '100%',
    },
  },
});

export default withStyle(style)(observer(VerifyEmail));
