import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Register from './Register';

const style = ({ font }) => ({
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

    '& > div:not(:first-child)': {
      marginTop: 20,
    },
  },
  button: {
    width: '100%',
    marginTop: 32,
  },
  links: {
    width: 322,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
  },
  registration: {
    marginTop: 16,
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

    '&:hover, &:focus-visible': {
      color: font.color.alternative,
    },

    '&:hover::after, &:focus-visible::after': {
      background: font.color.alternative,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: '100%',
    },
    links: {
      '& > *': {
        marginBottom: 0,
      },
    },
  },
});

export default withStyle(style)(observer(Register));
