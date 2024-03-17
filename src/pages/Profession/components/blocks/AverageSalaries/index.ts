import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import AverageSalaries from './AverageSalaries';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',

    '& > h2': {
      marginBottom: 24,
    },
  },

  containerSalaries: {
    '& > div:first-child, & > svg:first-child': {
      marginBottom: 16,
    },

    '& > div > h3': {
      marginBottom: 12,
    },
  },
};

export default memo(withStyle(style)(observer(AverageSalaries)));
