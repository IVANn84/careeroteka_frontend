import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Step4 from './Step4';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: [0, 'auto'],
  },
  header: {
    width: 750,
    textAlign: 'center',
    margin: [0, 'auto'],

    '& > h1': {
      marginBottom: 24,
    },

    '& > p': {
      marginBottom: 40,
    },
  },
  fields: {
    maxWidth: '70%',
    marginBottom: 90,
  },
  reviews: {
    '& > *:not(:last-child)': {
      marginBottom: 30,
    },
  },
  actions: {
    marginLeft: 'auto',

    '& > *:not(:last-child)': {
      marginRight: 30,
    },
  },
};

export default withStyle(style)(observer(Step4));
