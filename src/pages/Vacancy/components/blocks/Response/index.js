import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';
import { memo } from 'react';

import Response from './Response.jsx';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    height: 'min-content',

    '& > h3': {
      marginBottom: 24,
    },

    '& button': {
      width: '100%',
    },

    '& > *:not(:last-child)': {
      marginBottom: 18,
    },
  },
  urls: {
    wordBreak: 'break-word',

    '& > *:not(:last-child)': {
      marginBottom: 18,
    },

    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '& > svg': {
        cursor: 'pointer',
        width: 24,
      },
    },

    '& > a': {
      display: 'flex',
      alignItems: 'center',
    },

    '& img': {
      width: 24,
      height: 24,
      marginRight: 6,
    },
  },
  contacts: {
    wordBreak: 'break-word',

    '& > *:not(:last-child)': {
      marginBottom: 18,
    },

    '& > div': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '& > svg': {
        cursor: 'pointer',
        width: 24,
      },
    },
  },
  contactValue: {
    color: font.color.alternative,
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      '& > h2': {
        marginBottom: 18,
      },
    },
  },
});

export default memo(withStyle(style)(observer(Response)));
