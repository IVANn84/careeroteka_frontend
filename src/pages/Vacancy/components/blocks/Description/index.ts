import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import Description from './Description';

const style = ({ typography }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,

    '& > h2': {
      marginBottom: 24,
    },
  },

  description: {
    '& > *:not(:last-child)': {
      display: 'block',
      marginBottom: 24,
    },

    '& strong': {
      fontWeight: typography.fontWeight.bold,
    },

    '& ul': {
      marginLeft: 17,

      '& li': {
        position: 'relative',

        '&:not(:last-child)': {
          marginBottom: 18,
        },

        '&::before': {
          content: '"\\2022"',
          paddingRight: 8,
          position: 'absolute',
          right: '100%',
          color: '#6D7279',
        },
      },
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      '& > h2': {
        marginBottom: 18,
      },
    },
  },
});

export default memo(withStyle(style)(observer(Description)));
