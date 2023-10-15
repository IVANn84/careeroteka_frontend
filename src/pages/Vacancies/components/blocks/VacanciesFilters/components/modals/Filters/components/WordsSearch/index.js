import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import WordsSearch from './WordsSearch.jsx';

const style = {
  title: {
    marginTop: 36,
    marginBottom: 32,
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
    marginTop: 36,
    marginBottom: 24,
  },
  variants: {
    '& > *:not(:first-child)': {
      marginTop: 16,
    },
  },
};

export default withStyle(style)(observer(WordsSearch));
