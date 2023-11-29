import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Salary from './Salary.jsx';

const style = {
  title: {
    marginTop: 36,
    marginBottom: 16,
  },
  description: {
    marginBottom: 36,
  },
  inputs: {
    display: 'flex',
    gap: '60px',
    marginBottom: 36,
  },
};

export default withStyle(style)(observer(Salary));
