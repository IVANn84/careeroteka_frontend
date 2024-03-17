import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import Main from './Main';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  about: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '& > span': {
      marginTop: 20,

      '&:first-letter': {
        textTransform: 'capitalize',
      },
    },
  },
  actions: {
    marginTop: 36,
  },
  image: {
    margin: ['auto', 0, 'auto', 50],
    width: 655,
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      flexDirection: 'column',
    },
    actions: {
      marginTop: 24,

      '& > button': {
        width: '100%',
      },
    },
    image: {
      margin: [37, 'auto', 0, 'auto'],
      width: '100%',
    },
  },
};

export default memo(withStyle(style)(observer(Main)));
