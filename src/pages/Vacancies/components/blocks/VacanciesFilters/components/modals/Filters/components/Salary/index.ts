import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Salary from './Salary';

const style = {
  title: {
    marginTop: 36,
    marginBottom: 16,
  },
  description: {
    marginBottom: 44,
  },
  inputs: {
    display: 'flex',
    gap: '60px',
    marginBottom: 36,
  },

  '@media screen and (max-device-width: 576px)': {
    title: {
      marginTop: 28,
      marginBottom: 8,
    },
    description: {
      marginBottom: 18,
    },
    inputs: {
      flexDirection: 'column',
      gap: '18px',
      marginBottom: 0,
    },
  },
};

export default withStyle(style)(observer(Salary));
