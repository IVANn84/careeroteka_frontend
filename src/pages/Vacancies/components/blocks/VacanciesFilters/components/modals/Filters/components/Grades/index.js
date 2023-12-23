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

  '@media screen and (max-device-width: 576px)': {
    title: {
      marginTop: 28,
      marginBottom: 8,
    },
    description: {
      marginBottom: 12,
    },
  },
};

export default withStyle(style)(observer(Grades));
