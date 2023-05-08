import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import VerifyEmail from './VerifyEmail.jsx';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  center: {
    textAlign: 'center',
  },
  row: {
    marginBottom: 24,
  },
  description: {
    marginBottom: 40,
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
});

export default withStyle(style)(observer(VerifyEmail));
