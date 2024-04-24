import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Characteristics from './Characteristics';

const style = ({ typography }) => ({
  title: {
    marginTop: 36,
    marginBottom: 16,
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
    '& label': {
      alignItems: 'start',

      '& > input': {
        marginTop: 6,
      },
    },
  },
  checkboxDescription: {
    '& > p': {
      marginBottom: 8,
      fontWeight: typography.fontWeight.semiBold,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    title: {
      marginTop: 28,
      marginBottom: 18,
    },
    container: {
      gridTemplateColumns: '1fr',
      gap: '18px',
      marginBottom: 12,
    },
    variants: {
      '& > *:not(:first-child)': {
        marginTop: 18,
      },

      '& label input': {
        marginTop: 3,
      },
    },
    checkboxDescription: {
      '& > p': {
        marginBottom: 6,
        fontWeight: typography.fontWeight.medium,
      },
    },
  },
});

export default withStyle(style)(observer(Characteristics));
