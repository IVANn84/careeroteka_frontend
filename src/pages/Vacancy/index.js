import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Vacancy from './Vacancy.jsx';

const style = {
  container: {
    '& > *:not(:last-child)': {
      marginBottom: 36,
    },
  },

  inlineBlocks: {
    display: 'flex',

    '& > *:not(:last-child)': {
      marginRight: 32,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    inlineBlocks: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridRowGap: 60,
    },
  },
};

export default withStyle(style)(observer(Vacancy));
