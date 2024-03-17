import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Tabs from './Tabs';

const style = {
  container: {
    whiteSpace: 'nowrap',
    overflowX: 'scroll',
    marginBottom: 34,
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    '& > div:not(:first-child)': {
      marginLeft: 36,
    },
  },

  loading: {
    '& > div': {
      cursor: 'auto',
      opacity: 0.7,

      '&:hover, &:focus-visible': {
        opacity: 0.7,
      },
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      marginBottom: 24,
      '& > div:not(:first-child)': {
        marginLeft: 16,
      },
    },
  },
};

export default withStyle(style)(observer(Tabs));
