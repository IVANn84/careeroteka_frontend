import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Characteristics from './Characteristics.jsx';

const style = ({ typography }) => ({
  title: {
    marginTop: 36,
    marginBottom: 32,
  },
  description: {
    marginBottom: 28,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '60px',
    marginBottom: 36,
  },
  variants: {
    '& > *:not(:first-child)': {
      marginTop: 38,
    },
  },
  checkboxDescription: {
    '& > p': {
      marginBottom: 8,
      fontWeight: typography.fontWeight.semiBold,
    },
  },
});

export default withStyle(style)(observer(Characteristics));
