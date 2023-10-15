import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Grades from './Grades.jsx';

const style = {
  title: {
    marginTop: 36,
    marginBottom: 16,
  },
  description: {
    marginBottom: 36,
  },
  variants: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: 36,
  },
};

export default withStyle(style)(observer(Grades));
