import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Vacancies from './Vacancies';

const style = ({ font: { color } }) => ({
  '@keyframes show': {
    '0%': { marginTop: -186 },
    '5%': { marginTop: -124 },
    '33%': { marginTop: -124 },
    '38%': { marginTop: -62 },
    '66%': { marginTop: -62 },
    '71%': { marginTop: 0 },
    '99.99%': { marginTop: 0 },
    '100%': { marginTop: -186 },
  },

  '@keyframes showMobile': {
    '0%': { marginTop: -108 },
    '5%': { marginTop: -72 },
    '33%': { marginTop: -72 },
    '38%': { marginTop: -36 },
    '66%': { marginTop: -36 },
    '71%': { marginTop: 0 },
    '99.99%': { marginTop: 0 },
    '100%': { marginTop: -108 },
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 8,
    marginBottom: 24,
    marginTop: 24,
    textAlign: 'center',
    paddingRight: 46,
  },

  flip: {
    height: 59,
    overflow: 'hidden',

    '& > div:first-child': {
      animation: '$show 12s linear infinite',
    },
  },

  word: {
    color: color.alternative,
    textAlign: 'left',
    padding: 4,
  },

  subTitle: {
    textAlign: 'center',
    paddingRight: 46,
  },

  '@media screen and (max-device-width: 576px)': {
    title: {
      textAlign: 'left',
      flexDirection: 'column',
      alignItems: 'start',
      marginTop: 0,
    },

    flip: {
      height: 36,
      overflow: 'hidden',

      '& > div:first-child': {
        animation: '$showMobile 12s linear infinite',
      },
    },

    word: {
      padding: 0,
    },
  },
});

export default withStyle(style)(observer(Vacancies));
