import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import Response from './Response.jsx';

const style = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 360,
    height: 'min-content',

    '& > h3': {
      marginBottom: 20,
    },

    '& > p': {
      marginBottom: 16,
    },

    '& li:not(:last-child)': {
      marginBottom: 20,
    },
  },

  list: {},

  item: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 8,
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: 'auto',

      '& > h3': {
        marginBottom: 14,
      },

      '& > p': {
        marginBottom: 12,
      },

      '& li:not(:last-child)': {
        marginBottom: 0,
      },
    },

    list: {
      display: 'flex',
      alignItems: 'start',
      columnGap: '12px',
    },

  },
});

export default memo(withStyle(style)(observer(Response)));
