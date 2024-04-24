import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Step3 from './Step3';

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
    maxWidth: '80%',
    marginBottom: 90,
  },
  input: {
    width: '90%',
    margin: [0, 'auto', 0, 'auto'],
  },
  actions: {
    marginLeft: 'auto',

    '& > *:not(:last-child)': {
      marginRight: 30,
    },
  },
};

export default withStyle(style)(observer(Step3));
