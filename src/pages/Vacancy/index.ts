import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Vacancy from './Vacancy';

const style = {
  container: {
    '& > *:not(:last-child)': {
      marginTop: 26,
      marginBottom: 32,
    },

    '& > *:last-child': {
      marginBottom: -38,
    },
  },

  inlineBlocks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& > *:last-child': {
      margin: [28, 0],
    },
  },

  '@media screen and (max-device-width: 760px)': {
    container: {
      '& > *:not(:last-child)': {
        marginTop: 0,
        marginBottom: 16,
      },
    },
  },
};

export default withStyle(style)(observer(Vacancy));
