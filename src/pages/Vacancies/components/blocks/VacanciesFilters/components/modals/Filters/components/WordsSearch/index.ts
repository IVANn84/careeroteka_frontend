import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import WordsSearch from './WordsSearch';

const style = {
  title: {
    marginBottom: 16,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '60px',
    marginBottom: 36,
  },
  descriptionInput: {
    marginBottom: 16,
  },
  descriptionAt: {
    marginTop: 24,
    marginBottom: 24,
  },
  variants: {
    '& > *:not(:first-child)': {
      marginTop: 16,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    title: {
      marginTop: 28,
      marginBottom: 16,
    },
    container: {
      gridTemplateColumns: '1fr',
      gap: '34px',
      marginBottom: 0,
    },
    descriptionInput: {
      marginBottom: 12,
    },
    descriptionAt: {
      marginTop: 14,
      marginBottom: 16,
    },
  },
};

export default withStyle(style)(observer(WordsSearch));
