import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Step5 from './Step5.jsx';

const style = {
  container: {
    display: 'flex',
    width: '70%',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  center: {
    textAlign: 'center',
  },
  row: {
    marginBottom: 24,
  },
  buttons: {
    marginTop: 45,

    '& > *:not(:last-child)': {
      marginRight: 25,
    },
  },
};

export default withStyle(style)(observer(Step5));
