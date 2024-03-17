import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import Description from './Description';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',

    '& > h2': {
      marginBottom: 24,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      '& > h2': {
        marginBottom: 18,
      },
    },
  },
};

export default memo(withStyle(style)(observer(Description)));
