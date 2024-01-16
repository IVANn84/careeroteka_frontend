import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Types from './Types.jsx';

const style = ({ font }) => ({
  title: {
    marginBottom: 16,
  },
  description: {
    marginBottom: 28,
  },
  variants: {
    marginBottom: 36,

    '& > button': {
      display: 'inline-block',
      padding: [24, 28],
      border: [1, 'solid', '#D1D2D2'],
      cursor: 'pointer',
      textAlign: 'center',
      transition: 'opacity .2s',

      '&:first-child': {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
      },
      '&:last-child': {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      },
      '&:not(:first-child)': {
        borderLeft: 0,
      },

      '&:hover, &:focus-visible': {
        opacity: 0.8,
      },
    },
  },
  selectedVariant: {
    background: font.color.alternative,
    color: font.color.light,
    borderTop: 'none !important',
    borderBottom: 'none !important',
    padding: '25px 28px !important',

    '&:first-child': {
      borderLeft: 'none !important',
      paddingLeft: '29px !important',
    },

    '&:last-child': {
      borderRight: 'none !important',
      paddingRight: '29px !important',
    },
  },

  '@media screen and (max-device-width: 576px)': {
    title: {
      marginBottom: 12,
    },
    variants: {
      marginBottom: 28,
    },
  },
});

export default withStyle(style)(observer(Types));
