import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';
import { memo } from 'react';

import Description from './Description.jsx';

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
    '& p, & ul': {
      ...typography.variants.B1,
    },

    '& h2': {
      marginBottom: 24,
      fontWeight: typography.fontWeight.bold,
      ...typography.variants.H2,

      '&:not(:first-child)': {
        marginTop: 34,
      },
    },

    '& ul li': {
      display: 'flex',

      '&:not(:last-child)': {
        marginBottom: 18,
      },

      '&::before': {
        content: '"\\2022"',
        color: '#6D7279',
        fontWeight: 'bold',
        marginRight: 8,
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
