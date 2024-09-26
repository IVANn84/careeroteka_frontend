import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Vacancy from './Vacancy';

const style = {
  container: {
    '& > *:not(:last-child)': {
      marginTop: 26,
      marginBottom: 36,
    },

    '& > *:last-child': {
      marginBottom: -38,
    },
  },

  inlineBlocks: {
    display: 'flex',

    '& > *:not(:last-child)': {
      marginRight: 32,
    },
  },

  '@media screen and (max-device-width: 760px)': {
    container: {
      '& > *:not(:last-child)': {
        marginTop: 0,
        marginBottom: 16,
      },
    },
    inlineBlocks: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridRowGap: 16,

      '& > *:not(:last-child)': {
        marginRight: 0,
        gridRow: 2,
      },
    },
  },
};

export default withStyle(style)(observer(Vacancy));
